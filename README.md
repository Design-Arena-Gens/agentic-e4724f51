## The Light Collector — Pixar-Style Short Blueprint

A Next.js single-page experience that packages the storyboard, audio direction, and character notes for **“The Light Collector”**, a 55‑second, non-verbal Pixar-inspired short featuring SPARK, a lonely maintenance robot.

### 🪄 What’s inside

- **Scene-by-scene timeline** with timing, visual beats, and sound cues tuned for YouTube Shorts pacing.
- **Character direction for SPARK** covering silhouette, movement language, emotional palette, and hero prop usage.
- **Production-ready storyboard table** mirroring the original Manus brief for quick hand-off to layout, animation, or AI shot generation.
- **Meta prompt summary** distilled for vertical short distribution copy.

### 🧱 Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Hand-crafted CSS with glassmorphism styling

### 🚀 Getting started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

To build for production:

```bash
npm run build
npm start
```

### 📂 Project structure

```
app/
 ├─ page.tsx        # Main page rendering the storyboard experience
 ├─ layout.tsx      # Root layout + metadata
 └─ globals.css     # Global design system styles
```

### 🔍 Notes

- The scene data and copy are sourced from the provided Manus brief for share `29d896fe-aec7-4a1a-9af8-e5bff7ea2b83`.
- `npm run lint` and `npm run build` pass cleanly.

Enjoy bringing SPARK’s quiet glow to life! ✨
