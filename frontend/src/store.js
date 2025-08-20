import { atom, createStore } from 'jotai';

// the part of the app where you 'run into' links to different sites
export const isSocialModalVisibleAtom = atom(false);
export const selectedLinkAtom = atom(null);
export const selectedLinkDescriptionAtom = atom("");

export const isEmailModalVisibleAtom = atom(false);
export const emailAtom = atom("");

export const isProjectModalVisibleAtom = atom(false);
export const chosenProjectDataAtom = atom({
    title: "",
    links: [{ id:0, name: "", link: ""}]
})

export const isAboutModalVisibleAtom = atom(false);
export const aboutDataAtom = atom({
    name: "Thomas Tahk",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    profilePic: "/path/to/profile.jpg" // placeholder path
})

export const isSkillsModalVisibleAtom = atom(false);
export const skillsDataAtom = atom({
    title: "Skills & Technologies",
    categories: [
        {
            name: "Frontend",
            skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"]
        },
        {
            name: "Backend",
            skills: ["Node.js", "Python", "PostgreSQL"]
        }
    ]
})

export const isExperienceModalVisibleAtom = atom(false);
export const experienceDataAtom = atom({
    title: "Experience",
    experiences: [
        {
            company: "Company Name",
            position: "Position Title",
            duration: "2023 - Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]
})

export const cameraZoomValueAtom = atom({value : 1})

export const store = createStore()