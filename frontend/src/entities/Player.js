
// make instance of a player with the following properties
export default function makePlayer(k, posVec2, speed) {
    const player = k.add([
        k.sprite("player", {anim: "walk-down-idle"}),
        k.scale(8),
        k.anchor("center"),
        k.area({ shape: new k.Rect(k.vec2(0), 5, 10)}),
        k.body(),
        k.pos(posVec2),
        "player",
        {
            direction: k.vec2(0, 0),
            directionName: "walk-down",
        }
    ])

    // TODO: player controls, etc...
    
    return player
}