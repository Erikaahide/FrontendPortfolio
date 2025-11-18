import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ExternalLink, Figma, Github } from "lucide-react";
import {
  ASHomeModal,
  ASNosotrasModal,
  ASContactoModal,
  ASPerfilModal,
  ASRegistroModal,
  ASLoginModal,
  ASForoModal,
  ASClasesModal,
  ASCarritoModal,
} from "../components/Modals/AprendeShop";

export default function AprendeShopDetail() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="aprendeshop-page">
      {/* === HERO === */}
      <section className="as-hero">
        <div className="as-hero-content">
          <h1>AprendeShop</h1>
          <p>{t("aprendeshop_detail_subtitle")}</p>
        </div>

        <a href="/" className="as-backlink">
          <ArrowLeft size={18} />
          <span>{t("back_to_portfolio")}</span>
        </a>
      </section>

      {/* === BODY === */}
      <main className="as-body">
        {/* Overview */}
        <section className="as-section animate-scaleIn">
          <h3 className="as-text-muted text-center">
            {t("project_overview_text")}
          </h3>
        </section>

        {/* Technologies */}
        <section className="as-section animate-scaleIn">
          <h2 className="as-heading">{t("technologies_title")}</h2>
          <div className="card">
            <ul className="pretty-bullets">
              {t("technologies_list")
                .split(". ")
                .filter(Boolean)
                .map((feature, i) => (
                  <li key={i}>{feature.trim()}.</li>
                ))}
            </ul>
          </div>
        </section>

        {/* Role & Duration */}
        <section className="as-section grid md:grid-cols-2 gap-10 animate-fadeIn">
          <div>
            <h2 className="as-heading">{t("my_role_title")}</h2>
            <p className="as-text-muted text-justify">
              {t("my_role_text")}
            </p>
          </div>
          <div>
            <h2 className="as-heading">{t("duration_title")}</h2>
            <p className="as-text-muted text-lg">
              {t("duration_text")}
            </p>
          </div>
        </section>

        {/* === FEATURES === */}
        <section className="animate-scaleIn">
          <h2 className="as-heading">
            {t("features_title")}
          </h2>
          <ul className="pretty-bullets list-disc list-inside space-y-2 text-[var(--text-muted)] text-justify">
            {t("features_list")
              .split(". ")
              .filter(Boolean)
              .map((feature, i) => (
                <li key={i}>{feature.trim()}.</li>
              ))}
          </ul>
        </section>

        {/* === BASED ON (PURPOSE & CONTEXT) === */}
        <section className="animate-fadeIn">
          <h2 className="as-heading">
            {t("based_on_title")}
          </h2>
          <p className="leading-relaxed text-[var(--text-muted)] text-justify">
            {t("based_on_text")}
          </p>
        </section>

        {/* === UX / DESIGN SPRINT PROCESS === */}
        <section className="animate-scaleIn">
          <h2 className="as-heading">{t("ux_process_title")}</h2>

          <div className="as-ux-grid">
            {["empathize", "define", "ideate", "prototype", "test"].map((key, i) => (
              <div key={key} className="as-ux-step">
                <div className="as-ux-index">{i + 1}</div>
                <h3>{t(`ux_${key}_title`)}</h3>
                <p>{t(`ux_${key}_desc`)}</p>
              </div>
            ))}
          </div>
        </section>


        {/* === SECTIONS (MODALES) === */}
        <section className="animate-fadeIn text-center">
          <h2 className="as-heading">
            AprendeShop Project
          </h2>

          {/* Botones de acceso a los modales */}
          <div className="grid sm:grid-cols-3 gap-3 justify-center">
            <button className="btn btn-accent3" onClick={() => setActiveModal("home")}>
              Home
            </button>
            <button className="btn btn-accent3" onClick={() => setActiveModal("nosotras")}>
              Nosotras
            </button>
            <button className="btn btn-accent3" onClick={() => setActiveModal("contacto")}>
              Contacto
            </button>
            <button className="btn btn-accent3" onClick={() => setActiveModal("foro")}>
              Foro
            </button>
            <button className="btn btn-accent3" onClick={() => setActiveModal("clases")}>
              Clases
            </button>
            <button className="btn btn-accent3" onClick={() => setActiveModal("carrito")}>
              Carrito
            </button>
            <button className="btn btn-accent3" onClick={() => setActiveModal("perfil")}>
              Perfil
            </button>
            <button className="btn btn-accent3" onClick={() => setActiveModal("registro")}>
              Registro
            </button>
            <button className="btn btn-accent3" onClick={() => setActiveModal("login")}>
              LogIn
            </button>
          </div>

          {/* Render dinámico de los modales */}
          {activeModal === "home" && <ASHomeModal onClose={closeModal} />}
          {activeModal === "nosotras" && <ASNosotrasModal onClose={closeModal} />}
          {activeModal === "contacto" && <ASContactoModal onClose={closeModal} />}
          {activeModal === "foro" && <ASForoModal onClose={closeModal} />}
          {activeModal === "clases" && <ASClasesModal onClose={closeModal} />}
          {activeModal === "carrito" && <ASCarritoModal onClose={closeModal} />}
          {activeModal === "perfil" && <ASPerfilModal onClose={closeModal} />}
          {activeModal === "registro" && <ASRegistroModal onClose={closeModal} />}
          {activeModal === "login" && <ASLoginModal onClose={closeModal} />}
        </section>

        {/* === TECHNICAL ASPECTS === */}
        <section className="animate-fadeIn">
          <h2 className="as-heading">
            {t("technical_title")}
          </h2>
          <ul className="pretty-bullets list-disc list-inside space-y-2 text-[var(--text-muted)] text-justify">
            {[
              "tech_json",
              "tech_emails",
              "tech_front",
              "tech_back",
              "tech_deploy_git",
              "tech_deploy_aws",
            ].map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </section>

        {/* === PROBLEM SOLVING === */}
        <section className="animate-scaleIn">
          <h2 className="as-heading">
            {t("problem_solving_title")}
          </h2>
          <p className="leading-relaxed text-[var(--text-muted)] text-justify">
            {t("problem_solving_text")}
          </p>
        </section>

        {/* === LINKS === */}
        <section className="text-center mt-16 space-y-4 animate-fadeIn">
          <h2 className="as-heading">
            {t("explore_title") || "Explore More"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://rubiportuguez.github.io/Aprende-Shop/index.html"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent3 flex items-center gap-2"
            >
              <ExternalLink size={18} /> {t("demo_btn") || "Live Demo"}
            </a>
            <a
              href="https://www.figma.com/design/MG8TBK9lzvWV1aU8pJSIPd/Borradores-AprendeShop"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent3 flex items-center gap-2"
            >
              <Figma size={18} /> Figma
            </a>
            <a
              href="https://github.com/RubiPortuguez/Aprende-Shop"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent3 flex items-center gap-2"
            >
              <Github size={18} /> {t("repo_btn") || "Repository"}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
