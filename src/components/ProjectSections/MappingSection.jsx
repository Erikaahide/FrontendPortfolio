import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";
import { Figma} from "lucide-react";

export default function MappingSection() {
  const { t } = useTranslation();

  return (
    <Section id="mapping" title={t("map_title")}>
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("mapping_title")}</h3>
        <p className="mb-4">{t("mapping_description")}</p>

        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>{t("mapping_task_1")}</li>
          <li>{t("mapping_task_2")}</li>
          <li>{t("mapping_task_3")}</li>
          <li>{t("mapping_task_5")}</li>
        </ul>

       <p className="mb-4">{t("mapping_conclution")}</p> 
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accentM"
            href="https://www.figma.com/design/DuViFESe9UqXJsrcQ0nU4L/Mapping?node-id=0-1&t=5fTtWeyRWbvoQi24-1"
            target="_blank"
            rel="noreferrer"
          >
            <Figma size={18} /> Mapping
          </a>
        </div>
      </div>
    </Section>
  );
}