import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";

export default function FigmaSection() {
  const { t } = useTranslation();

  return (
    <Section id="figma" title="Figma">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("figma_description")}</h3>
        <p className="mb-4">{t("figma_text")}</p>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accent7"
            href="https://www.figma.com/design/zsiRvaHp8P9v2CB2HxYtHE/Portfolio?node-id=0-1&t=1TMprCo3F1mFlZZx-1"
            target="_blank"
            rel="noreferrer"
          >
            {t("portfolio_btn")}
          </a>
          <a
            className="btn btn-accent7"
            href="https://www.figma.com/design/ZPpJGbMZmsWddn3i0icvXt/Portfolio?node-id=0-1&t=BCGzJieD65UEbvnu-0"
            target="_blank"
            rel="noreferrer"
          >
            Wireframe
          </a>
        </div>
      </div>
    </Section>
  );
}
