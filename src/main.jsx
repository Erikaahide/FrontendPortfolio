import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";

import "./styles/tokens.css";       // design tokens
import "./styles/index.css";        // base + Tailwind
import "./styles/animations.css";   // animaciones
import "./styles/modals.css";       // estilos de modales
import "./styles/pages/aprendeshop.css";


// Importa la app principal
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
