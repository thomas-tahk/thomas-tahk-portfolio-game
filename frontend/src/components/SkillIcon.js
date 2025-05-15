import makeIcon from "./Icon"

export default function makeSkillIcon(k, parent, posVec2, imageData, subtitle) {
    const [icon, subtitleText] = makeIcon(
        k,
        parent,
        posVec2,
        imageData,
        subtitle
    )

    icon.use(k.area({shape: new k.Rect(k.vec2(0), icon.width + 50, icon.height + 65)}))
    icon.use(k.body())
    icon.onCollide("player", (player) => {
        icon.applyImpulse(player.direction.scale(1000))
    })
    // TODO: opacity modifier for child game objects

    return icon
}