import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <Section id="contact" title={t("contact_title")}>
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">
          {t("contact_subtitle")}
        </h3>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accent"
            href="mailto:eahidehernandez@gmail.com"
            rel="noreferrer"
          >
            📧 Email
          </a>
          <a
            className="btn btn-accent"
            href="http://www.linkedin.com/in/erikaahg-desarrolladora-web"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
          <a
            className="btn btn-accent"
            href="https://github.com/Erikaahide"
            target="_blank"
            rel="noreferrer"
          >
            🐱 GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
