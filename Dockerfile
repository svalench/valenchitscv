# Сборка Vite-приложения и раздача через nginx.
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine
# Динамический модуль brotli той же версии nginx, что в образе.
# Статические libbrotlienc/libbrotlicommon собираем до configure:
# иначе линковка модуля падает с cannot find -lbrotlicommon.
RUN apk add --no-cache --virtual .brotli-build \
      gcc libc-dev make cmake git wget pcre2-dev zlib-dev openssl-dev linux-headers \
 && NGINX_VERSION="$(nginx -v 2>&1 | sed 's#.*/##')" \
 && git clone --depth=1 --recurse-submodules https://github.com/google/ngx_brotli.git /tmp/ngx_brotli \
 && (cd /tmp/ngx_brotli/deps/brotli && mkdir out && cd out && cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=OFF -DCMAKE_POSITION_INDEPENDENT_CODE=ON .. && cmake --build . --config Release --target brotlienc brotlicommon) \
 && wget -qO- "https://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz" | tar -xz -C /tmp \
 && cd "/tmp/nginx-${NGINX_VERSION}" \
 && ./configure --with-compat --add-dynamic-module=/tmp/ngx_brotli \
 && make modules \
 && mkdir -p /etc/nginx/modules \
 && cp objs/ngx_http_brotli_filter_module.so /etc/nginx/modules/ \
 && sed -i '1i load_module /etc/nginx/modules/ngx_http_brotli_filter_module.so;' /etc/nginx/nginx.conf \
 && apk del .brotli-build \
 && rm -rf /tmp/nginx-* /tmp/ngx_brotli

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
