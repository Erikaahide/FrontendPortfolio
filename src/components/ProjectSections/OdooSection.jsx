import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";
import { Figma, Github, Eye, } from "lucide-react";

export default function OdooSection() {
  const { t } = useTranslation();

  return (
    <Section id="odoo" title="Odoo">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("odoo_title")}</h3>
        <p className="mb-4">{t("odoo_description")}</p>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accentO"
            href="https://erikaahide.github.io/Odoo/"
            target="_blank"
            rel="noreferrer"
          >
            <Eye size={18} /> {t("view_btn")}
          </a>
          <a
            className="btn btn-accentO"
            href="https://github.com/Erikaahide/Odoo"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18}></Github> GitHub Repo
          </a>
          <a
            className="btn btn-accentO"
            href="https://panic-circus-60529424.figma.site/"
            target="_blank"
            rel="noreferrer"
          >
            <Figma size={18} /> Figma
          </a>
        </div>
      </div>
    </Section>
  );
}
