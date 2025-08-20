import makeSection from "./components/Section";
import makeKaplayCtx from "./kaplayCtx";
import { PALETTE } from "./constants";
import makePlayer from "./entities/Player";
import { cameraZoomValueAtom, store, isAboutModalVisibleAtom, isSkillsModalVisibleAtom, isExperienceModalVisibleAtom, isProjectModalVisibleAtom } from "./store";

export default async function initGame() {
    const k = makeKaplayCtx()
    // player sprite and designating which frames are for which animations
    k.loadSprite("player", "/sprites/player.png", {
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
    k.loadFont("ibm-regular", "/fonts/IBMPlexSans-Regular.ttf");
    k.loadFont("ibm-bold", "/fonts/IBMPlexSans-Bold.ttf");
    k.loadSprite("github-logo", "/logos/github-logo.png");
    k.loadSprite("linkedin-logo", "/logos/linkedin-logo.png");
    // k.loadSprite("youtube-logo", "/logos/youtube-logo.png");
    // k.loadSprite("x-logo", "/logos/x-logo.png");
    // k.loadSprite("substack-logo", "/logos/substack-logo.png");
    k.loadSprite("javascript-logo", "/logos/js-logo.png");
    k.loadSprite("typescript-logo", "/logos/ts-logo.png");
    k.loadSprite("react-logo", "/logos/react-logo.png");
    k.loadSprite("nextjs-logo", "/logos/nextjs-logo.png");
    k.loadSprite("postgres-logo", "/logos/postgres-logo.png");
    k.loadSprite("html-logo", "/logos/html-logo.png");
    k.loadSprite("css-logo", "/logos/css-logo.png");
    k.loadSprite("tailwind-logo", "/logos/tailwind-logo.png");
    k.loadSprite("python-logo", "/logos/python-logo.png");
    // k.loadSprite("email-logo", "/logos/email-logo.png");
    // a shader is a program that runs on gpu that changes color of pixel on screen
    // kinda like a printing press for computer screens
    // we're using a fragment shader program written in glsl specific to kaplay
    k.loadShaderURL("tiledPattern", null, "/shaders/tiledPattern.frag");
    
    // player character scaling - adjusted for better overview
    if (k.width() < 1000) {
        store.set(cameraZoomValueAtom, 0.3)
        k.camScale(k.vec2(0.3))

    } else {
        store.set(cameraZoomValueAtom, 0.5)
        k.camScale(k.vec2(0.5))
    } 

    k.onUpdate(() => {
        const camZoomValue = store.get(cameraZoomValueAtom)
        if (camZoomValue !== k.camScale()) {
            k.camScale(k.vec2(camZoomValue))
        }
    })    
    
    // gameobject that displays the shader
    const tiledBackground = k.add([
        k.uvquad(k.width(), k.height()),
        k.shader("tiledPattern", () => ({
            u_time: k.time() / 20,
            u_color1: k.Color.fromHex(PALETTE.color1),
            u_color2: k.Color.fromHex(PALETTE.color2),
            u_speed: k.vec2(1, -1),  // feel free to change this to liking
            u_aspect: k.width() / k.height(),
            u_size: 5,
    })),
    k.pos(0),
    k.fixed()
    ])

    // makes tiled pattern responsive to window resizing
    k.onResize(() => {
        tiledBackground.width = k.width()
        tiledBackground.height = k.height()
        tiledBackground.uniform.u_aspect = k.width() / k.height()
    })
    // Background text for intro (shadow/outline effect) - moved up more
    const socialSectionBg = k.add([
        k.text("Hi, I'm Thomas Tahk, a developer for the web and video games", {
            font: "ibm-bold",
            size: 72,
        }),
        k.color(k.Color.fromHex("#000000")),
        k.anchor("center"),
        k.pos(k.center().x + 4, k.center().y - 1136),
    ])

    // Foreground text for intro - moved up more
    const socialSection = k.add([
        k.text("Hi, I'm Thomas Tahk, a developer for the web and video games", {
            font: "ibm-bold",
            size: 72,
        }),
        k.color(k.Color.fromHex("#f39c12")),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 1140),
    ])

    // Load Gmail logo sprite
    k.loadSprite("gmail-logo", "/logos/gmail-logo.svg");

    // GitHub Logo - moved up more
    const githubLogo = k.add([
        k.sprite("github-logo"),
        k.scale(0.15),
        k.anchor("center"),
        k.pos(k.center().x - 200, k.center().y - 1040),
    ])

    // LinkedIn Logo - moved up more
    const linkedinLogo = k.add([
        k.sprite("linkedin-logo"),
        k.scale(0.25),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 1040),
    ])

    // Gmail Logo - moved up more
    const gmailLogo = k.add([
        k.sprite("gmail-logo"),
        k.scale(0.25),
        k.anchor("center"),
        k.pos(k.center().x + 200, k.center().y - 1040),
    ])

    // Text labels - shifted up by player height
    // GitHub label background
    k.add([
        k.text("GitHub", {
            font: "ibm-bold", 
            size: 32,
        }),
        k.color(k.Color.fromHex("#000000")),
        k.anchor("center"),
        k.pos(k.center().x - 198, k.center().y - 922),
    ])
    // GitHub label foreground
    k.add([
        k.text("GitHub", {
            font: "ibm-bold", 
            size: 32,
        }),
        k.color(k.Color.fromHex("#f39c12")),
        k.anchor("center"),
        k.pos(k.center().x - 200, k.center().y - 920),
    ])

    // LinkedIn label background
    k.add([
        k.text("LinkedIn", {
            font: "ibm-bold", 
            size: 32,
        }),
        k.color(k.Color.fromHex("#000000")),
        k.anchor("center"),
        k.pos(k.center().x + 2, k.center().y - 922),
    ])
    // LinkedIn label foreground
    k.add([
        k.text("LinkedIn", {
            font: "ibm-bold", 
            size: 32,
        }),
        k.color(k.Color.fromHex("#f39c12")),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 920),
    ])

    // Gmail label background
    k.add([
        k.text("Gmail", {
            font: "ibm-bold", 
            size: 32,
        }),
        k.color(k.Color.fromHex("#000000")),
        k.anchor("center"),
        k.pos(k.center().x + 202, k.center().y - 922),
    ])
    // Gmail label foreground
    k.add([
        k.text("Gmail", {
            font: "ibm-bold", 
            size: 32,
        }),
        k.color(k.Color.fromHex("#f39c12")),
        k.anchor("center"),
        k.pos(k.center().x + 200, k.center().y - 920),
    ])

    // Social circles - shifted up by player height
    const githubCircle = k.add([
        k.circle(80),
        k.anchor("center"),
        k.area(),
        k.pos(k.center().x - 200, k.center().y - 820),
        k.color(k.Color.fromHex("#d35400")), // Darker orange
        k.outline(4, k.Color.fromHex("#000000")),
        "github-social"
    ])

    const linkedinCircle = k.add([
        k.circle(80),
        k.anchor("center"),
        k.area(),
        k.pos(k.center().x, k.center().y - 820),
        k.color(k.Color.fromHex("#d35400")), // Darker orange
        k.outline(4, k.Color.fromHex("#000000")),
        "linkedin-social"
    ])

    const gmailCircle = k.add([
        k.circle(80),
        k.anchor("center"),
        k.area(),
        k.pos(k.center().x + 200, k.center().y - 820),
        k.color(k.Color.fromHex("#d35400")), // Darker orange
        k.outline(4, k.Color.fromHex("#000000")),
        "gmail-social"
    ])


    // Interactive squares/areas for portfolio sections
    makeSection(
        k, 
        k.vec2(k.center().x, k.center().y - 400), 
        "About", 
        (section) => {
            console.log("Entered About section!")
            store.set(isAboutModalVisibleAtom, true)
        },
        (section) => {
            console.log("Exited About section!")
            store.set(isAboutModalVisibleAtom, false)
        }
    )

    makeSection(
        k, 
        k.vec2(k.center().x-400, k.center().y), 
        "Skills",
        (section) => {
            console.log("Entered Skills section!")
            store.set(isSkillsModalVisibleAtom, true)
        },
        (section) => {
            console.log("Exited Skills section!")
            store.set(isSkillsModalVisibleAtom, false)
        }
    )

    makeSection(
        k, 
        k.vec2(k.center().x+400, k.center().y), 
        "Experience",
        (section) => {
            console.log("Entered Experience section!")
            store.set(isExperienceModalVisibleAtom, true)
        },
        (section) => {
            console.log("Exited Experience section!")
            store.set(isExperienceModalVisibleAtom, false)
        }
    )

    makeSection(
        k, 
        k.vec2(k.center().x, k.center().y+400), 
        "Projects",
        (section) => {
            console.log("Entered Projects section!")
            store.set(isProjectModalVisibleAtom, true)
        },
        (section) => {
            console.log("Exited Projects section!")
            store.set(isProjectModalVisibleAtom, false)
        }
    )

    // create player object north of About section, between social section and orange sections
    makePlayer(k, k.vec2(k.center().x, k.center().y - 700), 700)

}