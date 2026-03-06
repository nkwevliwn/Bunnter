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

# Build for production
npm run build

# Preview production build
npm run preview
```

## How It Works

Each rabbit image has a list of descriptive tags (e.g. `white`, `fluffy`, `outdoor`, `baby`).
When you swipe:
- **Like (→)** → each tag's weight increases by `+1`
- **Dislike (←)** → each tag's weight decreases by `0.5`

The next image is chosen from the unseen pool by summing the current weights for its tags, picking the highest scorer — so you'll see more of what you like.

## Contributing

Pull requests welcome! Add more rabbit images in `src/data/images.ts`.
