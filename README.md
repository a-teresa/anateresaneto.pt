# Firmware / Embedded Engineer — Portfolio

Dark, minimal portfolio for an embedded engineer working with **Zephyr RTOS** and **Yocto**.
Static site, no build step, deployable to GitHub Pages as-is.

Lead project: **AuraScope** — an Auracast BLE-audio receiver presented as a USB sound card on a
Zynq-7000, with kernel-side (char driver) and eBPF observability, built and documented step by step.

## Structure
```
.
├── index.html                       # landing page (AuraScope is the lead card)
├── assets/
│   ├── style.css                    # all styling (CSS variables at top)
│   └── main.js                      # boot animation + scroll reveals
├── projects/
│   ├── project-template.html        # copy this for a NEW project
│   ├── aurascope.html               # AuraScope hub: the 15-step roadmap
│   └── aurascope/
│       ├── step-01.html             # worked example (filled-in pattern)
│       ├── step-02.html ... step-15.html   # stubs, ready to fill
│       └── step-14b.html
├── CNAME                            # your custom domain (optional)
└── .nojekyll                        # disables Jekyll processing
```

## How the AuraScope pages connect
- `index.html` → AuraScope card → `projects/aurascope.html` (the hub).
- The hub lists all 15 steps; each row links to `projects/aurascope/step-NN.html`.
- Each step page links prev / all-steps / next, so the series reads as a sequence.
- `step-01.html` is filled in as the pattern. For each new step you publish:
  1. Open the matching `step-NN.html` stub.
  2. Replace the `[ ... ]` placeholders with real content + code.
  3. Update the `// status: planned` line and `[date]`.
  4. On the hub (`aurascope.html`), the row already links — optionally swap its
     `step-tag soon` class to `step-tag` to mark it live.

## Asset paths (important)
All pages reference assets at `assets/style.css` and `assets/main.js`.
Make sure `style.css` and `main.js` live in `assets/` (not the repo root).

## Fill in over the coming weeks
- [ ] Write the About section in `index.html`
- [ ] Fill `step-01` content (Yocto boot) and flip it to live
- [ ] Work down the steps as you ship each one
- [ ] Add your real repo URL (replace the `github.com/a-teresa` links on the hub/steps)
- [ ] Set your real domain in `CNAME`

## Deploy to GitHub Pages
1. Create a repo (for a root domain use `yourusername.github.io`, or any name for a project site).
2. Push these files to the `main` branch.
3. Repo → **Settings → Pages** → Source: `main` / root.
4. Custom domain: enter your domain, Save, then enable **Enforce HTTPS** once DNS resolves.

### DNS records (at your domain provider)
A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
CNAME `www` → `yourusername.github.io`
