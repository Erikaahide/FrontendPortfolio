import React from "react";
import { GraduationCap, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EducationModal({ onClose }) {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-aboutme animate-slideUp" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <h4 className="text-2xl font-bold mb-3 text-pink-100 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-pink-200" />
          {t("modal_education_title")}
        </h4>

        <p className="text-sm mb-6 text-[var(--surface-muted)]">
          {t("modal_about_education_intro")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h5 className="font-semibold text-pink-200 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-pink-300" />
              {t("modal_about_fullstack")}
            </h5>
            <p className="text-sm text-[var(--surface-muted)] leading-relaxed">
              {t("modal_about_fullstack_desc")}
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-[var(--surface-muted)]">
              <li>{t("modal_about_fullstack_point1")}</li>
              <li>{t("modal_about_fullstack_point2")}</li>
              <li>{t("modal_about_fullstack_point3")}</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
            <h5 className="font-semibold text-pink-200 mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4 text-pink-300" />
              {t("modal_about_fashiondesign")}
            </h5>
            <p className="text-sm text-[var(--surface-muted)] leading-relaxed">
              {t("modal_about_fashiondesign_desc")}
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-[var(--surface-muted)]">
              <li>{t("modal_about_fashiondesign_point1")}</li>
              <li>{t("modal_about_fashiondesign_point2")}</li>
              <li>{t("modal_about_fashiondesign_point3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
