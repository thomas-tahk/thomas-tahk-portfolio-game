import makeKaplayCtx from "./kaplayCtx";

export default async function initGame() {
    const k = makeKaplayCtx()
    // player sprite and designating which frames are for which animations
    k.loadSprite("player", "./sprites/player.png", {
        sliceX: 4, // number of frames per row
        sliceY: 8, // number of frames per column
        anims: {
            // numbering indicates the sprite/frame ordering 0 starts at top left then goes right before moving to next row
            "walk-down-idle": 0,
            "walk-down": { from: 0, to: 3, loop: true },
            "walk-left-down": { from: 4, to: 7, loop: true },
            "walk-left-down-idle": 4,
            "walk-left": { from: 8, to: 11, loop: true },
            "walk-left-idle": 8,
            "walk-left-up": { from: 12, to: 15, loop: true },
            "walk-left-up-idle": 12,
            "walk-up": { from: 16, to: 19, loop: true },
            "walk-up-idle": 16,
            "walk-right-up": { from: 20, to: 23, loop: true },
            "walk-right-up-idle": 20,
            "walk-right": { from: 24, to: 27, loop: true },
            "walk-right-idle": 24,
            "walk-right-down": { from: 28, to: 31, loop: true },
            "walk-right-down-idle": 28
        }
    })
    // loading various fonts and sprites to be used in the project
    k.loadFont("ibm-regular", "./fonts/IBMPlexSans-Regular.ttf");
    k.loadFont("ibm-bold", "./fonts/IBMPlexSans-Bold.ttf");
    k.loadSprite("github-logo", "./logos/github-logo.png");
    k.loadSprite("linkedin-logo", "./logos/linkedin-logo.png");
    k.loadSprite("youtube-logo", "./logos/youtube-logo.png");
    k.loadSprite("x-logo", "./logos/x-logo.png");
    k.loadSprite("substack-logo", "./logos/substack-logo.png");
    k.loadSprite("javascript-logo", "./logos/js-logo.png");
    k.loadSprite("typescript-logo", "./logos/ts-logo.png");
    k.loadSprite("react-logo", "./logos/react-logo.png");
    k.loadSprite("nextjs-logo", "./logos/nextjs-logo.png");
    k.loadSprite("postgres-logo", "./logos/postgres-logo.png");
    k.loadSprite("html-logo", "./logos/html-logo.png");
    k.loadSprite("css-logo", "./logos/css-logo.png");
    k.loadSprite("tailwind-logo", "./logos/tailwind-logo.png");
    k.loadSprite("python-logo", "./logos/python-logo.png");
    k.loadSprite("email-logo", "./logos/email-logo.png");
    k.loadShaderURL("tiledPattern", null, "./shaders/tiledPattern.frag");

    // TODO: import Shader
    // a shader is a program that runs on gpu that changes color of pixel on screen
    // kinda like a printing press for computer screens
    // we're using a fragment shader program written in glsl specific to kaplay
    

}