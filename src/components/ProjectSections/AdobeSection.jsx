import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";

export default function AdobeSection() {
  const { t } = useTranslation();

  return (
    <Section id="adobe" title="AdobeSuite">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("book")}</h3>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accent4"
            href="https://drive.google.com/file/d/1LXkoXs2C3OjuENXDobDhNGNGjYEuHxeY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            {t("portfolio_PDF_btn")}
          </a>
        </div>
      </div>
    </Section>
  );
}
