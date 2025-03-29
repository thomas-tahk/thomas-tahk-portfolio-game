
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
    let isMouseDown = false
    const game = document.getElementById("game");
    game.addEventListener("focusout", () => {
        isMouseDown = false
    })
    game.addEventListener("mousedown", () => {
        isMouseDown = true
    })
    game.addEventListener("mouseup", () => {
        isMouseDown = false
    })  
    game.addEventListener("touchstart", (e) => {
        isMouseDown = true
    })
    game.addEventListener("touchend", (e) => {
        isMouseDown = false
    })

    player.onUpdate(() => {
        if (!k.camPos().eq(player.pos)) {
            k.tween(k.camPos(), player.pos, 0.2, (newPost) => k.camPos(newPost),
        k.easings.linear
    )
        }

        player.direction = k.vec2(0, 0)
        const worldMousePos = k.toWorld(k.mousePos())
        if (isMouseDown) {
            player.direction = worldMousePos.sub(player.pos).unit()
        }
        // Todo implement animations

        player.move(player.direction.scale(speed))
    })

    return player
}