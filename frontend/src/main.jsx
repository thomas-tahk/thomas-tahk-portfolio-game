import { createRoot} from "react-dom/client"
import { StrictMode } from "react";
import initGame from "./initGame";
import ReactUI from "./ReactUI";

const ui = document.getElementById('ui');
const root = createRoot(ui)
root.render(
  <StrictMode>
    <ReactUI />
  </StrictMode>
);

initGame();