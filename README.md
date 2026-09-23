# Kamran Ahmed — Portfolio

A React + Vite portfolio built from Kamran Ahmed's .NET and MERN stack CVs.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy — GitHub Pages

1. Create a new **public** repo on GitHub, e.g. `kamran-portfolio`.
2. In this project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/kamran-portfolio.git
   git push -u origin main
   ```
3. Install the deploy helper and add deploy scripts:
   ```bash
   npm install --save-dev gh-pages
   ```
   In `package.json`, add:
   ```json
   "homepage": "https://<your-username>.github.io/kamran-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. On GitHub: **Settings → Pages → Source → `gh-pages` branch**. Your site goes live at the `homepage` URL in a minute or two.

## Deploy — Vercel (recommended, since your other projects already live there)

1. Push the repo to GitHub (steps 1–2 above).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel usually detects this automatically).
4. Click **Deploy** — you'll get a live `.vercel.app` URL, and it auto-redeploys on every push to `main`.

## Customizing

- All personal content (bio, projects, skills, education) lives in `src/data.js` — edit there rather than in the components.
- Colors, fonts, and spacing are defined as CSS variables at the top of `src/index.css`.
- Add project screenshots by dropping images into `public/` and referencing them in `src/data.js` + `Projects.jsx`.
