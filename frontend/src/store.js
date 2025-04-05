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

export const cameraZoomValueAtom = atom({value : 1})