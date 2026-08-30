# Docker deploy fix

- Причина: package-lock.json ссылался на npm.mirrors.msh.team (недоступно на сервере)
- Исправлено: все resolved → registry.npmjs.org, добавлен .npmrc
- DONE
