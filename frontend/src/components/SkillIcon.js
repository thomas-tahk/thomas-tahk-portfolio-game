import makeIcon from "./Icon"

export default function makeSkillIcon(k, parent, posVec2, imageData, subtitle) {
    const [icon, subtitleText] = makeIcon(
        k,
        parent,
        posVec2,
        imageData,
        subtitle
    )

    icon.use(k.area({shape: new.k}))
}