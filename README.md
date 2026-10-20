# Baichau Portfolio (React + Vite)

## Run it
```bash
npm install
npm run dev      # local preview
npm run build    # production build in /dist
```
Deploy on Vercel: import the repo, the Vite preset is detected automatically (delete the old `vercel.json` if it points at Create React App).

## Add a project (no code changes)
Open `src/data/projects.json` and add an object:
```json
{
  "title": "My new app",
  "description": "One sentence about what it does.",
  "tags": ["React", "API"],
  "repo": "https://github.com/Baichau/my-new-app",
  "live": "https://my-new-app.vercel.app",
  "featured": false
}
```
- `featured: true` projects are always shown. Everything else sits behind **See more**.
- `live` is optional. If set, the row opens the live site instead of the repo.

## Change your text
Headline, bio, facts, tools and contact button all live in `src/data/profile.json`.
Colors and fonts are CSS variables at the top of `src/index.css`.
