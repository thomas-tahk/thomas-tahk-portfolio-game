# Thomas Tahk Portfolio Game - Claude Documentation

## Project Overview
This is a portfolio website presented as a simplified 2D game, inspired by JSLegendDev's work. The project serves as a starting point for building a unique, interactive portfolio experience.

## Current Status
- ✅ Functional 2D game with player movement (WASD + arrow keys + mouse/touch)
- ✅ Game sections with collision detection working
- ✅ Proper zoom level for good overview
- ✅ React modal system in place (Email, Project, Social)
- ✅ Asset structure and game engine setup complete
- ✅ Golden orange sections that contrast well with background

## Goals
1. ✅ Complete basic portfolio game functionality
2. Add more game sections (Projects, Skills, Contact)
3. Connect sections to existing modals
4. Personalize with Thomas's details/info
5. Deploy to GitHub Pages
6. Future expansion and iteration beyond the initial inspiration

## Development Notes
- **Latest Status**: Camera positioning fixed with percentage-based offset workaround
- **Recent Progress**: 
  - ✅ AboutModal.jsx created with auto-open/close functionality
  - ✅ Fixed missing imports in SocialModal (useAtomValue)
  - ✅ Fixed modal CSS positioning (uncommented z-index and top properties)
  - ✅ Camera positioning issue resolved with percentage-based offset (40% width, 43% height)
  - ⚠️ Using deprecated Kaplay methods (camPos, camScale) as newer API caused positioning issues
- **Current Workaround**: Player appears centered using camera offset instead of fixing coordinate system
- **Technical Notes**: Camera follows player with calculated offset to compensate for rendering issue

## Next Steps
- [ ] Test About modal functionality now that positioning is fixed
- [ ] Connect Skills/Experience/Projects sections to their respective modals
- [ ] Add kickable skills/logos as interactive elements
- [ ] Populate with Thomas's actual content and details
- [ ] Set up deployment pipeline

## Session Notes
- **Documentation Policy**: Claude will update this file with progress after each meaningful session
- **Known Issues**: Kaplay coordinate system has unexplained offset - using workaround rather than root cause fix