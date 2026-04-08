import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/scss/main.scss";
import "./i18n/index.js";

let root = document.getElementById("root");
if (root) {     
  createRoot(root).render(<App/>);
}
