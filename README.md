# Firmware / Embedded Engineer — Portfolio

Dark, minimal portfolio for an embedded engineer working with **Zephyr RTOS** and **Yocto**.
Static site, no build step, deployable to GitHub Pages as-is.

## Structure
```
.
├── index.html                  # landing page
├── assets/
│   ├── style.css               # all styling (CSS variables at top)
│   └── main.js                 # boot animation + scroll reveals
├── projects/
│   └── project-template.html   # copy this per project
├── CNAME                       # your custom domain
└── .nojekyll                   # disables Jekyll processing
```

## Fill in over the coming weeks
- [ ] Replace name / title / hero copy in `index.html`
- [ ] Update email + GitHub + LinkedIn links (search `yourusername` / `you@example.com`)
- [ ] Write the About section
- [ ] For each project: copy `projects/project-template.html`, rename it,
      fill it in, and point the matching card in `index.html` at it
- [ ] Change `WIP` card statuses to `LIVE` when done
- [ ] Set your real domain in `CNAME`

## Deploy to GitHub Pages
1. Create a repo (for a root domain use `yourusername.github.io`, or any repo name for a project site).
2. Push these files to the `main` branch.
3. Repo → **Settings → Pages** → Source: `main` / root.
4. Custom domain: enter your domain, Save, then enable **Enforce HTTPS** once DNS resolves.

### DNS records (at your domain provider)
A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
CNAME `www` → `yourusername.github.io`
