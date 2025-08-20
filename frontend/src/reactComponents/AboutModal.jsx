import { useAtomValue } from "jotai";
import { isAboutModalVisibleAtom, aboutDataAtom } from "../store";

export default function AboutModal() {
  const aboutData = useAtomValue(aboutDataAtom);
  const isVisible = useAtomValue(isAboutModalVisibleAtom);

  return (
    isVisible && (
      <div className="modal about-modal">
        <div className="modal-content">
          <div className="about-content">
            <div className="about-text">
              <h1>About {aboutData.name}</h1>
              <p>{aboutData.description}</p>
            </div>
            <div className="about-image">
              <div className="profile-placeholder">
                {/* Placeholder for profile image */}
                <span>Profile Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}