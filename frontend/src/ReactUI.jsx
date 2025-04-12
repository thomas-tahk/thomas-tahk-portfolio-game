import CameraController from "./reactComponents/CameraController";

export default function ReactUI() {
    return (
        <>
            <p className="controls-message">Tap/Click around to move</p>
            
            <CameraController />
        </>
    )
}