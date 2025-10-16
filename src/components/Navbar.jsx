import React from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    const next = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(next);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner flex justify-between items-center px-4 w-full">
        <div className="left-icons flex gap-2">
          <a
            href="#home"
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium 
               w-12 h-12 rounded-full shadow-md transition duration-300 
               flex items-center justify-center"
          >
            <strong>EA</strong>
          </a>
        </div>

        <div className="right-icons flex gap-2">
          <ThemeToggle />
          <button
            className="btn btn-circle text-xl"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {i18n.language === "en" ? "🇲🇽" : "🇺🇸"}
          </button>
        </div>
      </div>
    </header>
  );
}
