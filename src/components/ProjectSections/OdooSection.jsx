import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";

export default function OdooSection() {
  const { t } = useTranslation();

  return (
    <Section id="odoo" title="Odoo">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">Odoo design exercise</h3>
        <p className="mb-4">{t("odoo_description")}</p>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accentO"
            href="https://erikaahide.github.io/Odoo/"
            target="_blank"
            rel="noreferrer"
          >
            {t("view_btn")}
          </a>
          <a
            className="btn btn-accentO"
            href="https://github.com/Erikaahide/Odoo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
          <a
            className="btn btn-accentO"
            href="https://panic-circus-60529424.figma.site/"
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
