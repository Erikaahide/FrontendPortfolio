import React from "react";
import { useTranslation } from "react-i18next";

export default function ProblemModal({ onClose, activeModal }) {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box modal-aprende animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h4 className="text-lg font-semibold mb-4">
          {t(
            activeModal === "fit-problem"
              ? "modal_fit_problem_title"
              : "modal_problem_title"
          )}
        </h4>

        <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
          <li>
            {t(
              activeModal === "fit-problem"
                ? "modal_fit_problem_1"
                : "modal_problem_1"
            )}
          </li>
          <li>
            {t(
              activeModal === "fit-problem"
                ? "modal_fit_problem_2"
                : "modal_problem_2"
            )}
          </li>
          <li>
            {t(
              activeModal === "fit-problem"
                ? "modal_fit_problem_3"
                : "modal_problem_3"
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
