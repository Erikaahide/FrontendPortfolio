import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";

export default function AprendeShopSection({ setActiveModal }) {
  const { t } = useTranslation();

  return (
    <Section id="aprendeShop" title="AprendeShop">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">
          {t("aprendeshop_subtitle")}
        </h3>
        <p className="mb-4">{t("aprendeshop_description")}</p>
        <p className="font-semibold mb-2">{t("aprendeshop_tasks_title")}</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>{t("aprendeshop_task_1")}</li>
          <li>{t("aprendeshop_task_2")}</li>
          <li>{t("aprendeshop_task_3")}</li>
          <li>{t("aprendeshop_task_4")}</li>
          <li>{t("aprendeshop_task_5")}</li>
          <li>{t("aprendeshop_task_6")}</li>
        </ul>
        <p>{t("aprendeshop_conclusion")}</p>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accent3"
            href="https://rubiportuguez.github.io/Aprende-Shop/index.html"
            target="_blank"
            rel="noreferrer"
          >
            {t("view_btn")}
          </a>
          <a
            className="btn btn-accent3"
            href="https://github.com/RubiPortuguez/Aprende-Shop/tree/develop"
            target="_blank"
            rel="noreferrer"
          >
            {t("fr_repo_btn")}
          </a>
          <a
            className="btn btn-accent3"
            href="https://github.com/RubiPortuguez/AprendeShop-Backend/tree/develop"
            target="_blank"
            rel="noreferrer"
          >
            {t("ba_repo_btn")}
          </a>
          <a
            className="btn btn-accent3"
            href="https://www.figma.com/design/MG8TBK9lzvWV1aU8pJSIPd/Borradores-AprendeShop?node-id=0-1&t=K5eREUPBSSRUzPKl-1"
            target="_blank"
            rel="noreferrer"
          >
            🖥️ Figma
          </a>
          <button
            className="btn btn-accent3"
            onClick={() => setActiveModal("problem")}
          >
            {t("problem_solving_btn")}
          </button>
          <button
            className="btn btn-accent3"
            onClick={() => setActiveModal("storiesAS")}
          >
            {t("user_stories_btn")}
          </button>
        </div>
      </div>
    </Section>
  );
}
