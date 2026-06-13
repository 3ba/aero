import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@aero/styles";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
