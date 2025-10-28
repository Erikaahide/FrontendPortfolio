import React from "react";
import { Laptop, Palette, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ExtraEducationModal({ onClose }) {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-aboutme animate-slideUp" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h4 className="text-2xl font-bold mb-3 text-pink-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-pink-200" />
          {t("modal_extra_education_title")}
        </h4>

        <p className="text-sm mb-6 text-[var(--surface-muted)]">
          {t("modal_extra_education_intro")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h5 className="font-semibold text-pink-200 mb-2 flex items-center gap-2">
              <Laptop className="w-4 h-4 text-pink-300" />
              {t("modal_extra_education_tech")}
            </h5>
            <ul className="list-disc list-inside text-sm text-[var(--surface-muted)] space-y-1">
              <li>Skill share - Figma Pro: Auto Layouts, Grids & Components</li>
              <li>Fundaula - Java</li>
              <li>Desafío Latam - CSS, Figma, Git, Web development</li>
              <li>Santander Open Academy – Gestión de Proyectos y Fundamentos de metodología Agile</li>
              <li>Coursera - Selenium Course</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h5 className="font-semibold text-pink-200 mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4 text-pink-300" />
              {t("modal_extra_education_design")}
            </h5>
            <ul className="list-disc list-inside text-sm text-[var(--surface-muted)] space-y-1">
              <li>Cisco Networking Academy – English for IT (B2 - CEFR)</li>
              <li>Berlitz – English Communication for Professionals</li>
              <li>EF SET Certification (C1)</li>
              <li>Domestika - Adobe Creative Suite</li>
              <li>INSIDE LVMH - Fashion Design, Innovation & Customer experience</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
