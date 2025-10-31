import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";

// 1) tokens PRIMERO
import "./styles/tokens.css";

// 2) CSS global
import "./index.css";
import "./App.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
