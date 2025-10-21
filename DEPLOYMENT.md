# GhostPad Website - Deployment Guide

## Live Site

🌐 **https://yahitscara.github.io/ghostpad-website/**

## Project Overview

This is an interactive marketing website for GhostPad that demonstrates the app's core feature (transparency) by being a working demo itself. Users can adjust the opacity slider to see content through the window, experiencing GhostPad before downloading.

## Tech Stack

- **React** 19.1.1
- **TypeScript** 5.9.3
- **Vite** 7.1.11
- **Tailwind CSS** 4.1.15
- **gh-pages** for deployment

## Project Structure

```
ghostpad-website/
├── src/
│   ├── components/
│   │   ├── GhostPadWindow.tsx       # Main window with opacity control
│   │   ├── ParallaxBackground.tsx   # Multi-layer parallax effect
│   │   ├── OpacityControl.tsx       # Slider component
│   │   └── ContentSections.tsx      # Website content
│   ├── App.tsx                      # Main app component
│   └── main.tsx                     # Entry point
├── public/                          # Static assets
├── dist/                           # Build output (gitignored)
└── package.json
```

## Development

### Prerequisites
- Node.js 22.12+ or 20.19+ (currently using 22.11.0 which works but shows warnings)
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Making Changes

1. Make your changes in `src/`
2. Test locally with `npm run dev`
3. Build and test with `npm run build && npm run preview`
4. Commit your changes
5. Deploy with `npm run deploy`

## Deployment

### Automated Deployment

```bash
npm run deploy
```

This command:
1. Runs `npm run build` (builds the production version)
2. Pushes the `dist/` folder to the `gh-pages` branch
3. GitHub Pages automatically deploys the updated site

### Manual Deployment Steps

If you need to deploy manually:

```bash
# Build the site
npm run build

# Deploy to gh-pages branch
npx gh-pages -d dist
```

### GitHub Pages Configuration

- **Repository**: https://github.com/yahitscara/ghostpad-website
- **Branch**: `gh-pages` (auto-created by gh-pages package)
- **Source**: `gh-pages` branch (root)
- **URL**: https://yahitscara.github.io/ghostpad-website/

**Important**: The `base` path in `vite.config.ts` is set to `/ghostpad-website/` to match the GitHub Pages subdomain.

## Custom Domain (Future)

To use a custom domain like `ghostpad.app`:

1. Add a `CNAME` file to `/public/` with your domain:
   ```
   ghostpad.app
   ```

2. Configure DNS at your registrar:
   ```
   Type: CNAME
   Name: @
   Value: yahitscara.github.io
   ```

3. In GitHub repo Settings → Pages → Custom domain, enter: `ghostpad.app`

4. Update `vite.config.ts` base to `/` instead of `/ghostpad-website/`

5. Redeploy with `npm run deploy`

## Component Details

### GhostPadWindow
- Mimics the actual GhostPad app window
- Opacity control in title bar (appears on hover)
- Non-functional window controls for visual consistency
- Responsive design

### ParallaxBackground
- Modular layer system
- Easy to swap backgrounds by modifying the `layers` prop
- Default: 3 gradient layers at different scroll speeds
- Can be extended with images, videos, or custom content

### OpacityControl
- Slider from 10% to 100%
- Real-time opacity adjustment
- Matches the styling of the actual app

### ContentSections
- Hero, Features, Use Cases, Download, Footer
- OS detection for highlighting download button
- Links to GitHub releases

## Updating Content

### Change Download Links
Edit `src/components/ContentSections.tsx`:
```typescript
const downloadLinks = {
  mac: 'https://github.com/yahitscara/ghostpad/releases/latest',
  windows: 'https://github.com/yahitscara/ghostpad/releases/latest',
  linux: 'https://github.com/yahitscara/ghostpad/releases/latest',
};
```

### Update Parallax Backgrounds
Edit `src/components/ParallaxBackground.tsx`:
```typescript
const defaultLayers: ParallaxLayer[] = [
  {
    id: 'layer-1',
    speed: 0.2,
    style: { /* your styles */ },
    content: <YourComponent /> // optional
  },
  // ... more layers
];
```

### Change App Version
Edit `src/components/ContentSections.tsx`:
```typescript
<p className="text-center text-sm text-gray-500">
  Version 1.0.3 • Free and open source
</p>
```

## Troubleshooting

### Build fails with Tailwind errors
- Make sure `@tailwindcss/postcss` is installed
- Check that `postcss.config.js` uses `@tailwindcss/postcss` not `tailwindcss`

### Site doesn't load on GitHub Pages
- Verify `base` in `vite.config.ts` matches repo name: `/ghostpad-website/`
- Check that `gh-pages` branch exists in GitHub
- Verify GitHub Pages settings point to `gh-pages` branch

### Assets not loading
- All asset paths must be relative
- Images in `/public/` are copied as-is to dist
- Check browser console for 404 errors

### Deployment fails
- Make sure you have push access to the repository
- Check that you're on the `main` branch
- Ensure there are no uncommitted changes

## Performance

- Build size: ~205 KB JS + ~5 KB CSS (gzipped: ~64 KB total)
- Parallax uses `requestAnimationFrame` for smooth 60fps scrolling
- Images should be optimized (WebP recommended)
- Consider lazy loading for background assets in future iterations

## Future Enhancements

- [ ] Add actual parallax images/videos (currently placeholder gradients)
- [ ] Implement dark mode toggle
- [ ] Add animations/transitions on scroll
- [ ] Newsletter signup integration
- [ ] Testimonials section
- [ ] Interactive video demo
- [ ] Analytics integration
- [ ] SEO optimization (meta tags, OpenGraph)

## Notes

- The site is designed to work on all modern browsers
- Mobile responsive but desktop-first (matching the app's primary use case)
- No backend required - purely static site
- Free hosting via GitHub Pages

---

**Last Updated**: October 21, 2025
**Deployed Version**: Initial MVP
**Maintainer**: yahitscara
