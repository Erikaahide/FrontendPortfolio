import React from "react";
import Section from "../Section";
import { useTranslation, Trans } from "react-i18next";
import { Github, Eye } from "lucide-react";

export default function JSDemoSection() {
  const { t } = useTranslation();

  return (
    <Section id="JS" title="JSDemo">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">
          Mini Search App API (JSdemo)
        </h3>

        <p className="mb-4">
          <Trans i18nKey="jsdemo_description">
            A simple JavaScript demo project: a user search app. <br />
            Built with <strong>Vanilla JS, HTML5, and CSS3</strong>. Fetch user data asynchronously from a REST API.
          </Trans>
        </p>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accent5"
            href="https://erikaahide.github.io/API-JS-PROMISES/"
            target="_blank"
            rel="noreferrer"
          >
            <Eye size={18} /> {t("view_btn")}
          </a>
          <a
            className="btn btn-accent5"
            href="https://github.com/Erikaahide/API-JS-PROMISES"
            target="_blank"
            rel="noreferrer"
          >
               <Github size={18}></Github> GitHub Repo
          </a>
        </div>
      </div>
    </Section>
  );
}
