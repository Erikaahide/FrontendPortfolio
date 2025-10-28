import React from "react";
import { Wrench, Server, Code2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function SkillsModal({ onClose }) {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-aboutme animate-slideUp" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h4 className="text-2xl font-bold mb-3 text-pink-100 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-pink-200" />
          {t("modal_skills_title")}
        </h4>

        <p className="text-sm mb-6 text-[var(--surface-muted)]">
          {t("modal_skills_text")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h5 className="font-semibold text-pink-200 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-pink-300" />
              {t("modal_skills_frontend")}
            </h5>
            <ul className="list-disc list-inside text-sm space-y-1 text-[var(--surface-muted)]">
              <li>HTML5 / CSS3</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>Figma (UI/UX Design)</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h5 className="font-semibold text-pink-200 mb-3 flex items-center gap-2">
              <Server className="w-4 h-4 text-pink-300" />
              {t("modal_skills_backend")}
            </h5>
            <ul className="list-disc list-inside text-sm space-y-1 text-[var(--surface-muted)]">
              <li>Java / Spring Boot</li>
              <li>Node.js</li>
              <li>MySQL / JPA</li>
              <li>REST APIs / Postman</li>
              <li>Junit</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="md:col-span-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h5 className="font-semibold text-pink-200 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-pink-300" />
              {t("modal_skills_tools")}
            </h5>
            <ul className="flex flex-wrap gap-3 text-sm text-[var(--surface-muted)]">
              {[
                "Git / GitHub",
                "Linux",
                "VS Code / Eclipse",
                "AWS",
                "Agile / Scrum",
              ].map((tool) => (
                <li
                  key={tool}
                  className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20 transition"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
