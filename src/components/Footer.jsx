import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="container" style={{ padding: "2rem 0", opacity: 0.8 }}>
      <small className="muted">
        © {new Date().getFullYear()} ErikaA. {t("footer_rights")}
      </small>
    </footer>
  );
}
