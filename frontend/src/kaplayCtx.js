import kaplay from "kaplay"

export default function makeKaplayCtx() {
    return kaplay({
        global: false,
        pixelDensity: 2,
        touchToMouse: true,
        debug: true, // TODO: set to false in production
        debugKey: "f1",
        canvas: document.getElementById("game")       
    })
}