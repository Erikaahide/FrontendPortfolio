import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";
import {Figma, Github, Eye } from "lucide-react";

export default function FitAppSection({ setActiveModal }) {
  const { t } = useTranslation();

  return (
    <Section id="fitapp" title="FitAppDemo">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("fitapp_description")}</h3>
        <p className="mb-4">{t("fitapp_text")}</p>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accent2"
            href="https://erikaahide.github.io/FitApp/"
            target="_blank"
            rel="noreferrer"
          >
             <Eye size={18} /> {t("view_btn")}
          </a>
          <a
            className="btn btn-accent2"
            href="https://github.com/Erikaahide/FitApp?tab=readme-ov-file"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18}></Github> GitHub Repo
          </a>
          <a
            className="btn btn-accent2"
            href="https://www.figma.com/design/zsiRvaHp8P9v2CB2HxYtHE/Portfolio?t=1vvkAoR8YqURUruz-1"
            target="_blank"
            rel="noreferrer"
          >
              <Figma size={18} /> Figma
          </a>
          <button
            className="btn btn-accent2"
            onClick={() => setActiveModal("fit-problem")}
          >
            {t("problem_solving_btn")}
          </button>
          <button
            className="btn btn-accent2"
            onClick={() => setActiveModal("fit-stories")}
          >
            {t("user_stories_btn")}
          </button>
          <button
            className="btn btn-accent2"
            onClick={() => setActiveModal("fit-future")}
          >
            {t("future_features_btn")}
          </button>
        </div>
      </div>
    </Section>
  );
}
