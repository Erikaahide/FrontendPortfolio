import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";

export default function SQLSection() {
  const { t } = useTranslation();

  return (
    <Section id="SQL" title="SQL">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("SQL_subtitle")}</h3>
        <p className="mb-4">{t("SQL_description")}</p>

        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>{t("SQL_task_1")}</li>
          <li>{t("SQL_task_2")}</li>
          <li>{t("SQL_task_3")}</li>
          <li>{t("SQL_task_4")}</li>
          <li>{t("SQL_task_5")}</li>
        </ul>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accent6"
            href="https://github.com/Erikaahide/SQLpractices"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </Section>
  );
}
