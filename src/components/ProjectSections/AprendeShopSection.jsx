import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { Github, Figma, Eye} from "lucide-react";
import { useNavigate } from "react-router-dom"; // importa el hook

export default function AprendeShopSection({ setActiveModal }) {
  const { t } = useTranslation();
  const navigate = useNavigate(); // inicializa el hook

  return (
    <Section id="aprendeShop" title="AprendeShop">
      <div className="relative">
      <button
  onClick={() => window.open(`${import.meta.env.BASE_URL}aprendeshop`, "_blank")}
  className="absolute top-0 right-0 btn btn-circle hover:scale-110 transition-transform duration-200"
  title="Ver más detalles del proyecto"
>
  <ExternalLink size={18} strokeWidth={2.5} />
</button>

      </div>

      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("aprendeshop_subtitle")}</h3>
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
             <Eye size={18} /> {t("view_btn")}
          </a>
          <a
            className="btn btn-accent3"
            href="https://github.com/RubiPortuguez/Aprende-Shop/tree/develop"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18}></Github> {t("fr_repo_btn")}
          </a>
          <a
            className="btn btn-accent3"
            href="https://github.com/RubiPortuguez/AprendeShop-Backend/tree/develop"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18}></Github> {t("ba_repo_btn")}
          </a>
          <a
            className="btn btn-accent3"
            href="https://www.figma.com/design/MG8TBK9lzvWV1aU8pJSIPd/Borradores-AprendeShop?node-id=0-1&t=K5eREUPBSSRUzPKl-1"
            target="_blank"
            rel="noreferrer"
          >
            <Figma size={18} /> Figma
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
