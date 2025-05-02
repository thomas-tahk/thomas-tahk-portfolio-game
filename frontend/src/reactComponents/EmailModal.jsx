import {useAtom} from "jotai";
import { isEmailModalVisibleAtom } from "../store";

export default function EmailModal() {
    const [isVisible, setIsVisible] = useAtom(isEmailModalVisibleAtom)
}