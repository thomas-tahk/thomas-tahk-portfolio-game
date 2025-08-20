# Thomas Tahk Portfolio Game

An interactive 2D portfolio website built as a game, where visitors can explore different sections by moving a character around the game world.

## Features

- **Interactive 2D Game**: Navigate using WASD, arrow keys, or mouse/touch
- **Portfolio Sections**: About, Skills, Experience, Projects, and Social links
- **Physics-Enabled Elements**: Interactive tech logos that can be pushed around
- **Modal System**: Detailed information displayed in React modals
- **Responsive Design**: Works across different screen sizes
- **Social Integration**: Direct links to GitHub, LinkedIn, and email

## Tech Stack

- **Frontend**: React 19 + Vite
- **Game Engine**: Kaplay (formerly Kaboom.js)
- **State Management**: Jotai
- **Styling**: CSS with responsive design
- **Deployment**: GitHub Pages with GitHub Actions

## Getting Started

1. Clone the repository
2. Navigate to the frontend directory: `cd frontend`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Open http://localhost:5173

## Building for Production

```bash
cd frontend
npm run build
```

## Live Demo

Visit the live portfolio game at: https://thomas-tahk.github.io/thomas-tahk-portfolio-game/

## Development

The project uses:
- Vite for fast development and building
- ESLint for code quality
- Responsive percentage-based positioning for cross-device compatibility
- GitHub Actions for automated deployment

## Project Structure

- `/frontend` - Main application code
- `/documentation` - Development notes and progress tracking
- `.github/workflows` - GitHub Actions deployment configuration