# Implementation Notes: Elow New Tab Extension

## Deviations
- **Added GlassIcons and Folder from react-bits**: Reused `GlassIcons` (WebGL2 refractive 3D glass tiles) and `Folder` (macOS 3D folding folder with magnetic paper cards) verbatim from `E:\GitHub\react-bits` per user request.

## Discovered edge cases
- Chrome Manifest V3 relative path requirement: Vite `base: './'` outputs relative links for all script and style assets.
- WebGL2 in GlassIcons: Requires canvas context initialized on client; handled cleanly by isomorphic layout effect in component.
- Folder interactivity: `Folder` expands on click with `--magnet-x` / `--magnet-y` physics; paper sub-cards stop event propagation so clicking individual link items navigates properly without toggling folder.

## Questions for review
- None currently blocking.
