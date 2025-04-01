import { DIAGONAL_FACTOR } from "../constants";

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
        // implement animations based on direction of player
        // when to play idle
        if (player.direction.eq(k.vec2(0, 0)) && 
        !player.getCurAnim().name.includes("idle")) {
            player.play(`${player.directionName}-idle`)
            return
        }

        if (
            player.direction.x > 0 &&
            player.direction.y > -0.5 &&
            player.direction.y < 0.5
          ) {
            player.directionName = "walk-right";
          }
      
          if (
            player.direction.x < 0 &&
            player.direction.y > -0.5 &&
            player.direction.y < 0.5
          )
            player.directionName = "walk-left";
      
          if (player.direction.x < 0 && player.direction.y < -0.8)
            player.directionName = "walk-up";
      
          if (player.direction.x < 0 && player.direction.y > 0.8)
            player.directionName = "walk-down";
      
          if (
            player.direction.x < 0 &&
            player.direction.y > -0.8 &&
            player.direction.y < -0.5
          )
            player.directionName = "walk-left-up";
      
          if (
            player.direction.x < 0 &&
            player.direction.y > 0.5 &&
            player.direction.y < 0.8
          )
            player.directionName = "walk-left-down";
      
          if (
            player.direction.x > 0 &&
            player.direction.y < -0.5 &&
            player.direction.y > -0.8
          )
            player.directionName = "walk-right-up";
      
          if (
            player.direction.x > 0 &&
            player.direction.y > 0.5 &&
            player.direction.y < 0.8
          )
            player.directionName = "walk-right-down";
      
          // play any animation that is not idle, prevent replaying if you're already playing the correct animation. 
          if (player.getCurAnim().name !== player.directionName) {
            player.play(player.directionName);
          }
      
          // move player in the direction they are facing
          if (player.direction.x && player.direction.y) {
            player.move(player.direction.scale(DIAGONAL_FACTOR * speed));
            return;
          }

        player.move(player.direction.scale(speed))
    })

    return player
}