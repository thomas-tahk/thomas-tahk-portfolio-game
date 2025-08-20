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
- **Latest Status**: Player positioning fixed, but modal positioning and text outlines still broken
- **Recent Progress**: 
  - ✅ AboutModal.jsx created with auto-open/close functionality - works for auto-open/close but positioning is broken
  - ✅ Fixed missing imports in SocialModal (useAtomValue)
  - ✅ Fixed modal CSS positioning (uncommented z-index and top properties)
  - ✅ Player positioning issue resolved with percentage-based camera offset (40% width, 43% height)
  - ⚠️ Using deprecated Kaplay methods (camPos, camScale) as newer API caused positioning issues
- **Current Issues**:
  - **Modal positioning**: About modal appears but is stuck in bottom-right, content cut off. Same coordinate system issue as player had.
  - **Text outlines**: Added k.outline() to section text but not visible. May be Kaplay API issue.
- **Technical Notes**: 
  - Camera follows player with calculated offset: `k.vec2(player.pos.x + k.width() * 0.4, player.pos.y + k.height() * 0.43)`
  - Modal uses CSS flexbox centering but suffers same offset as player did initially

## Immediate Next Steps (for next session)
- [ ] **Fix modal positioning**: Modal stuck in bottom-right like player was. Need similar percentage-based offset solution for CSS positioning
- [ ] **Fix text outlines**: k.outline() not working on section text ("About", "Skills", etc.). May need different Kaplay method or approach
- [ ] Connect remaining sections (Skills/Experience/Projects) to their respective modals  
- [ ] Add kickable skills/logos as interactive elements
- [ ] Populate with Thomas's actual content and details

## Session Notes
- **Documentation Policy**: Claude will update this file with progress after each meaningful session
- **Known Issues**: Kaplay coordinate system has unexplained offset - using workaround rather than root cause fix