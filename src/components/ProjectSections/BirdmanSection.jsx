import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";
import { Github, Eye } from "lucide-react";

export default function BirdmanSection({ setActiveModal }) {
  const { t } = useTranslation();

  return (
    <Section id="improve" title="Improvements">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("birdman_imp")}</h3>
        <p className="mb-4">{t("improve_description")}</p>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accentB"
            href="https://erikaahide.github.io/Birdman-Improvements/"
            target="_blank"
            rel="noreferrer"
          >
             <Eye size={18} /> {t("view_btn")}
          </a>
          <a
            className="btn btn-accentB"
            href="https://mx.birdman.com/?srsltid=AfmBOoqRKqiBwmBaszMRHu67mPj-ZH0bITLB6EnWoO56ytlSL86Y6cVi"
            target="_blank"
            rel="noreferrer"
          >
            Real website
          </a>
          <a
            className="btn btn-accentB"
            href="https://github.com/Erikaahide/Birdman-Improvements"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18}></Github> GitHub Repo
          </a>
          <button
            className="btn btn-accentB"
            onClick={() => setActiveModal("birdman-stories")}
          >
            {t("user_stories_btn")}
          </button>
        </div>
      </div>
    </Section>
  );
}
