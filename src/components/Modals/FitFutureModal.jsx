import React from "react";
import { useTranslation } from "react-i18next";

export default function FitFutureModal({ onClose }) {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-fit animate-fadeIn" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <h4 className="text-lg font-semibold mb-4">
          {t("modal_fit_future_title")}
        </h4>

        <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
          <li>{t("modal_fit_future_1")}</li>
          <li>{t("modal_fit_future_2")}</li>
          <li>{t("modal_fit_future_3")}</li>
        </ul>
      </div>
    </div>
  );
}
