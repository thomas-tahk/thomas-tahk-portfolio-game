import { useAtomValue } from "jotai";
import { isExperienceModalVisibleAtom, experienceDataAtom } from "../store";

export default function ExperienceModal() {
  const experienceData = useAtomValue(experienceDataAtom);
  const isVisible = useAtomValue(isExperienceModalVisibleAtom);

  return (
    isVisible && (
      <div className="modal experience-modal">
        <div className="modal-content">
          <h1>{experienceData.title}</h1>
          <div className="experience-content">
            {experienceData.experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <h2>{exp.position}</h2>
                <h3>{exp.company}</h3>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}