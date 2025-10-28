import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";

export default function BirdmanSection({ setActiveModal }) {
  const { t } = useTranslation();

  return (
    <Section id="improve" title="Improvements">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">Birdman Web Improvements</h3>
        <p className="mb-4">{t("improve_description")}</p>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accentB"
            href="https://erikaahide.github.io/Birdman-Improvements/"
            target="_blank"
            rel="noreferrer"
          >
            {t("view_btn")}
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
            GitHub Repo
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
