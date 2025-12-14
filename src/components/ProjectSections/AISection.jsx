import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";
import {FileText,Users,Workflow,LayoutTemplate,MessagesSquare,} from "lucide-react";

export default function AISection() {
  const { t } = useTranslation();

  return (
    <Section id="ai" title="Generative AI">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("AI_title")}</h3>
        <p className="mb-4">{t("AI_description")}</p>
        <p className="mb-4">{t("AI_handson")}</p>
        <p className="mb-4">{t("AI_disclaimer")}</p>

        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
        <a
            className="btn btn-accentAI"
            href="https://drive.google.com/file/d/1mkCBwScfEBfSWxgN5d6fu6YWQnu-_-qd/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            aria-label={t("ai_view_project")}
            title={t("ai_view_project")}
          >
            <FileText size={18} />
            {t("view_cs")}
          </a>
        
          <a
            className="btn btn-accentAI"
            href="https://uxpilot.ai/s/fcc10f5f422680d055337ab49f4717b1"
            target="_blank"
            rel="noreferrer"
            aria-label={t("ai_open_uxpilot")}
            title={t("ai_open_uxpilot")}
          >
            <Users size={18} /> UX Pilot
          </a>

          <a
            className="btn btn-accentAI"
            href="https://miro.com/app/board/uXjVGbyCMkg=/?share_link_id=532570109218"
            target="_blank"
            rel="noreferrer"
            aria-label={t("ai_open_miro")}
            title={t("ai_open_miro")}
          >
            <Workflow size={18} /> Miro
          </a>

          <a
            className="btn btn-accentAI"
            href="https://app.visily.ai/projects/aae4cf3e-8d2e-4264-827c-46e836caeafc/boards/2387096"
            target="_blank"
            rel="noreferrer"
            aria-label={t("ai_open_visily")}
            title={t("ai_open_visily")}
          >
            <LayoutTemplate size={18} /> Visily
          </a>

          <a
            className="btn btn-accentAI"
            href="https://creator.voiceflow.com/share/693e0a59f77ecd303cc335f9/development"
            target="_blank"
            rel="noreferrer"
            aria-label={t("ai_open_voiceflow")}
            title={t("ai_open_voiceflow")}
          >
            <MessagesSquare size={18} /> Voiceflow
          </a>

        </div>
      </div>
    </Section>
  );
}