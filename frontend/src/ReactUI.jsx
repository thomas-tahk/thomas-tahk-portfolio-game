import CameraController from "./reactComponents/CameraController";
import ControlsMessage from "./reactComponents/ControlsMessage";
import AboutModal from "./reactComponents/AboutModal";
import EmailModal from "./reactComponents/EmailModal";
import ProjectModal from "./reactComponents/ProjectModal";
import SocialModal from "./reactComponents/SocialModal";
import SkillsModal from "./reactComponents/SkillsModal";
import ExperienceModal from "./reactComponents/ExperienceModal";

export default function ReactUI() {
    return (
        <>
            <ControlsMessage />
            <CameraController />
            <AboutModal />
            <EmailModal />
            <ProjectModal />
            <SocialModal />
            <SkillsModal />
            <ExperienceModal />
        </>
    )
}