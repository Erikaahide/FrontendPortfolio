import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroHome() {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero dynamic-bg" style={{ padding: "4rem 0", color: "white", width: "100vw" }}>
      <div className="container" style={{ maxWidth: "100%" }}>
        <h1 className="hero-title">{t("hero_title")}</h1>
        <p className="hero-sub">{t("hero_sub")}</p>
        <div className="flex gap-3 justify-center flex-wrap mt-4">
          <a href="#about" className="btn btn-primary">{t("about_title")}</a>
          <a href="#aprendeShop" className="btn btn-accent3">AprendeShop</a>
          <a href="#improve" className="btn btn-accentB">Improvements</a>
          <a href="#fitapp" className="btn btn-accent2">FitAppDemo</a>
          <a href="#odoo" className="btn btn-accentO">Excersice</a>
          <a href="#figma" className="btn btn-accent7">Figma</a>
          <a href="#JS" className="btn btn-accent5">JSDemo</a>
          <a href="#SQL" className="btn btn-accent6">SQLDemo</a>
          <a href="#adobe" className="btn btn-accent4">AdobeSuite</a>
          <a href="#contact" className="btn btn-accent">{t("contact_title")}</a>
        </div>
      </div>
    </section>
  );
}
