import {PALETTE} from "../constants"

export default function makeSection(k, posVec2, sectionName, onEnter, onExit) {
    const section = k.add([
        k.rect(200, 200, {radius: 10}),
        k.anchor("center"), 
        k.area(),
        k.pos(posVec2),
        k.color(k.Color.fromHex("#d35400")),
        k.outline(2, k.Color.fromHex("#000000")),
        sectionName
    ])

    // Background text (outline effect)
    section.add([
        k.text(sectionName, {
            font: "ibm-bold", 
            size: 64,
        }),
        k.color(k.Color.fromHex("#000000")),
        k.anchor("center"),
        k.pos(2, -148), // Slight offset for outline effect
    ])
    
    // Foreground text
    section.add([
        k.text(sectionName, {
            font: "ibm-bold", 
            size: 64,
        }),
        k.color(k.Color.fromHex("#f39c12")),
        k.anchor("center"),
        k.pos(0, -150),
    ])

    if (onEnter) {
        section.onCollide("player", () => {
            onEnter(section)
        })
    }

    if (onExit) {
        section.onCollideEnd("player", () => {
            onExit(section)
        })
    }

    return section
}