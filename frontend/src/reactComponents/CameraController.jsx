import { ZOOM_MAX_BOUND, ZOOM_MIN_BOUND } from "../constants"

export default function CameraController() {
    const [camZoomValue, setCamZoomValue] = useAtom(cameraZoomValueAtom)

    return (
        <div>
            <button
            onClick={() => {
                const newZoomValue = camZoomValue + 0.2
                if (newZoomValue <= ZOOM_MAX_BOUND && newZoomValue >= ZOOM_MIN_BOUND) {
                    setCamZoomValue(newZoomValue)
                }
            }}>+</button>
            <button onClick={() => {
                const newZoomValue = camZoomValue - 0.2
                if (newZoomValue <= ZOOM_MAX_BOUND && newZoomValue >= ZOOM_MIN_BOUND) {
                    setCamZoomValue(newZoomValue)
                }
            }}>-</button>
        </div>
    )
}