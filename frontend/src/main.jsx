import { createRoot} from "react-dom/client"
import { StrictMode } from "react";
import initGame from "./initGame";

const ui = document.getElementById('ui');
const root = createRoot(ui)
root.render(
  <StrictMode>
    <h1>Hello World!</h1>
  </StrictMode>
);

initGame();