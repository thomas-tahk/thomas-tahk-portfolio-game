import {PALETTE} from "../constants"

export default function makeSection(k, posVec2, sectionName, onEnter, onExit) {
    // Responsive section size and font
    const sectionSize = k.height() * 0.2; // 20% of screen height
    const fontSize = k.height() * 0.07; // 7% of screen height
    const outlineWidth = k.height() * 0.002; // Responsive outline
    
    const section = k.add([
        k.rect(sectionSize, sectionSize, {radius: 10}),
        k.anchor("center"), 
        k.area(),
        k.pos(posVec2),
        k.color(k.Color.fromHex("#d35400")),
        k.outline(outlineWidth, k.Color.fromHex("#000000")),
        sectionName
    ])

    // Background text (outline effect)
    section.add([
        k.text(sectionName, {
            font: "ibm-bold", 
            size: fontSize,
        }),
        k.color(k.Color.fromHex("#000000")),
        k.anchor("center"),
        k.pos(2, -sectionSize * 0.75), // Responsive positioning
    ])
    
    // Foreground text
    section.add([
        k.text(sectionName, {
            font: "ibm-bold", 
            size: fontSize,
        }),
        k.color(k.Color.fromHex("#f39c12")),
        k.anchor("center"),
        k.pos(0, -sectionSize * 0.75),
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