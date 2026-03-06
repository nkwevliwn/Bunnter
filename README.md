# 🐰 Bunnter

**Tinder for bunnies** — a Tinder-style single-page app that shows rabbit pictures and lets you swipe to like or dislike them. Each new picture is chosen to look more like the ones you liked.

## Features

- 🖼️ Curated rabbit images with rich tags (colour, breed, setting, style)
- ↔️ Swipe right to **like**, swipe left to **dislike** (drag gesture + buttons)
- 🤖 Tag-based recommendation engine — liked tags are boosted, disliked tags are penalised
- 📱 Mobile-friendly responsive layout
- ✨ Animated card with LIKE / NOPE stamps during drag
- 🔄 "Start over" when all rabbits have been seen

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool & dev server)
- **Tailwind CSS 3** (styling)
- **GitHub Actions** (CI/CD — build & deploy to GitHub Pages)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

```bash
# Type-check and build for production
npm run build
```

The build output is written to the **`dist/`** folder. It contains fully static assets (HTML, JS, CSS) that can be served by any web server.

```bash
# Preview the production build locally
npm run preview
```

After running `npm run preview`, Vite serves the `dist/` folder at [http://localhost:4173](http://localhost:4173) so you can verify the production build before deploying.

## Deployment

The project is deployed automatically to **GitHub Pages** via the CI/CD pipeline in `.github/workflows/ci.yml` whenever a commit is pushed to the `main` branch.

The pipeline:
1. Installs dependencies (`npm ci`)
2. Lints the code (`npm run lint`)
3. Builds the app (`npm run build`) — output goes to `dist/`
4. Uploads `dist/` as a GitHub Pages artifact
5. Deploys to GitHub Pages

The live URL is **`https://<your-github-username>.github.io/Bunnter/`** (replace `<your-github-username>` with the repository owner's GitHub username).

## How It Works

Each rabbit image has a list of descriptive tags (e.g. `white`, `fluffy`, `outdoor`, `baby`).
When you swipe:
- **Like (→)** → each tag's weight increases by `+1`
- **Dislike (←)** → each tag's weight decreases by `0.5`

The next image is chosen from the unseen pool by summing the current weights for its tags, picking the highest scorer — so you'll see more of what you like.

## Contributing

Pull requests welcome! Add more rabbit images in `src/data/images.ts`.
