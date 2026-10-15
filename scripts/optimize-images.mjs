/* Сборка WebP/AVIF из JPEG-мастеров. <picture> в Hero и About ссылается на эти файлы. */
import sharp from 'sharp'

const jobs = [
  { src: 'public/img/hero.jpg', width: 500, base: 'public/img/hero-500' },
  { src: 'public/img/hero.jpg', width: 1000, base: 'public/img/hero-1000' },
  { src: 'public/img/about.jpg', width: 450, base: 'public/img/about-450' },
  { src: 'public/img/about.jpg', width: 900, base: 'public/img/about-900' },
]

const og = await sharp('public/og.jpg').metadata()
if (og.width !== 1200 || og.height !== 630) {
  throw new Error(`public/og.jpg должен быть 1200x630, сейчас ${og.width}x${og.height}`)
}

for (const job of jobs) {
  const pipeline = sharp(job.src).rotate().resize({ width: job.width, withoutEnlargement: true })
  const avif = await pipeline.clone().avif({ quality: 45, effort: 4 }).toFile(`${job.base}.avif`)
  const webp = await pipeline.clone().webp({ quality: 68 }).toFile(`${job.base}.webp`)
  console.log(`${job.base} avif ${avif.width}x${avif.height} ${avif.size}B, webp ${webp.size}B`)
}
