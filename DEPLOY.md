# Deployment and search indexing

Run `npm ci`, `npm run build`, then deploy the complete `dist/` directory with
the supplied `nginx.conf`, or rebuild the existing Docker Compose stack:

```sh
docker compose up -d --build
```

The existing TLS proxy must forward the original Host header. If it overwrites
Host, configure the www → https://valenchits.dev redirect at that proxy instead.
Keep the existing HTTP → HTTPS redirect. No DNS changes are required.

After deployment verify `/`, `/ru/`, `/be/`, `/robots.txt`, `/sitemap.xml`,
a nonexistent path (404), and `https://www.valenchits.dev/` (301).
Use View Source to confirm the CV text is present without JavaScript.

Verify ownership in Google Search Console and Yandex Webmaster, submit
https://valenchits.dev/sitemap.xml, and request indexing for the three pages.
Account ownership verification cannot be replaced by Yandex Metrika.
Add https://valenchits.dev/ to GitHub profile/README, LinkedIn and product profiles.
Indexing and ranking are not guaranteed by these changes.

## Facts requiring owner input

- Confirm Open to work, Minsk and relocation preferences.
- Explain the March–June 2025 overlap between Alusoft and AlusoftBel.
- Supply team size and measurable outcomes; none were invented.
- Confirm preferred Russian/Belarusian name spellings and public contact email.
- Verify article/repository/package counts and product release details.
- Product case studies need first-hand architecture and outcome details before publication.

The PDF button opens the browser print dialog: select Save as PDF.
