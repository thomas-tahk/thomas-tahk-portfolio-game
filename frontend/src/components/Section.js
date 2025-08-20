import {PALETTE} from "../constants"

export default function makeSection(k, posVec2, sectionName, onCollide) {
    const section = k.add([
        k.rect(200, 200, {radius: 10}),
        k.anchor("center"), 
        k.area(),
        k.pos(posVec2),
        k.color(k.Color.fromHex("#f39c12")),
        sectionName
    ])

    section.add([
        k.text(sectionName, {font: "ibm-bold", size: 64}),
        k.color(k.Color.fromHex("#f39c12")),
        k.anchor("center"),
        k.pos(0, -150),
    ])

    if (onCollide) {
        const onCollideController = section.onCollide("player", () => {
            onCollide(section)
            onCollideController.cancel()
        })
    }

    return section
}