import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroHome from "./components/HeroHome";
import Section from "./components/Section";
import "./i18n"; // importa la configuración de idiomas
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";


export default function App() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);


  return (
    <div>
      <Navbar />
      <main>
        <HeroHome />
        {/* --- ABOUT SECTION --- */}
        <Section id="about" title={t("about_title")}>
          <div className="stack">
            <h2 className="text-2xl font-bold mb-2">{t("about_intro")}</h2>
            <p className="mb-4">{t("about_text")}</p>

            <h3 className="text-lg font-semibold mb-2">{t("skills_title")}</h3>
            <p className="mb-4">{t("skills_list")}</p>

            <p>{t("about_linkedin_intro")}</p>
            <a
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300"
              href="http://www.linkedin.com/in/erikaahg-desarrolladora-web"
              target="_blank"
              rel="noreferrer"
            >
              {t("about_linkedin_btn")}
            </a>
          </div>
        </Section>


        {/* --- MODALES DINÁMICOS --- */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 animate-fadeIn"
            onClick={() => setActiveModal(null)}
          >
            <div
              className={`relative w-full max-w-3xl rounded-[var(--radius)] p-[var(--space-6)] shadow-xl backdrop-blur-md border border-white/10 transition-all duration-300
     glow-border, glow-border-hover ${activeModal === "problem" || activeModal === "fit-problem"
                  ? "bg-gradient-to-br from-green-700/85 to-emerald-900/75 text-emerald-50 animate-fadeIn"
                  : activeModal === "storiesAS" || activeModal === "fit-stories"
                    ? "bg-gradient-to-br from-cyan-600/85 to-blue-800/75 text-cyan-50 animate-slideUp"
                    : activeModal === "roles" || activeModal === "fit-future"
                      ? "bg-gradient-to-br from-pink-600/85 to-fuchsia-800/55 text-pink-50 animate-zoomIn"
                      : "bg-zinc-800/60 text-white"
                }`}


              style={{
                color: "var(--surface)",
                border: "var(--border)",
                fontFamily: "var(--font-sans)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-xl font-bold text-[var(--muted)] hover:text-[var(--text)] transition"
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* --- PROBLEM SOLVING MODAL (AprendeShop & FitApp) --- */}
              {(activeModal === "problem" || activeModal === "fit-problem") && (
                <>
                  <h4 className="text-lg font-semibold mb-4">
                    {t(activeModal === "fit-problem" ? "modal_fit_problem_title" : "modal_problem_title")}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                    <li>{t(activeModal === "fit-problem" ? "modal_fit_problem_1" : "modal_problem_1")}</li>
                    <li>{t(activeModal === "fit-problem" ? "modal_fit_problem_2" : "modal_problem_2")}</li>
                    <li>{t(activeModal === "fit-problem" ? "modal_fit_problem_3" : "modal_problem_3")}</li>
                  </ul>
                </>
              )}

              {/* --- USER STORIES (AprendeShop & FitApp) --- */}
              {(activeModal === "storiesAS" || activeModal === "fit-stories") && (
                <>
                  <h4 className="text-lg font-semibold mb-4">
                    {t(activeModal === "fit-stories" ? "modal_fit_stories_title" : "modal_stories_title")}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                    <li>{t(activeModal === "fit-stories" ? "modal_fit_story_1" : "modal_story_1")}</li>
                    <li>{t(activeModal === "fit-stories" ? "modal_fit_story_2" : "modal_story_2")}</li>
                    <li>{t(activeModal === "fit-stories" ? "modal_fit_story_3" : "modal_story_3")}</li>
                  </ul>
                </>
              )}

              {/* --- TEAM ROLES --- */}
              {activeModal === "roles" && (
                <>
                  <h4 className="text-lg font-semibold mb-4">{t("modal_roles_title")}</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                    <li>{t("modal_role_1")}</li>
                    <li>{t("modal_role_2")}</li>
                    <li>{t("modal_role_3")}</li>
                  </ul>
                </>
              )}

              {/* --- FUTURE GOALS (FitApp) --- */}
              {activeModal === "fit-future" && (
                <>
                  <h4 className="text-lg font-semibold mb-4">{t("modal_fit_future_title")}</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                    <li>{t("modal_fit_future_1")}</li>
                    <li>{t("modal_fit_future_2")}</li>
                    <li>{t("modal_fit_future_3")}</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        )}

        <Section id="aprendeShop" title="AprendeShop">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              {t("aprendeshop_subtitle")}
            </h3>
            <p className="mb-4">{t("aprendeshop_description")}</p>
            <p className="font-semibold mb-2">{t("aprendeshop_tasks_title")}</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>{t("aprendeshop_task_1")}</li>
              <li>{t("aprendeshop_task_2")}</li>
              <li>{t("aprendeshop_task_3")}</li>
              <li>{t("aprendeshop_task_4")}</li>
              <li>{t("aprendeshop_task_5")}</li>
              <li>{t("aprendeshop_task_6")}</li>
            </ul>
            <p>{t("aprendeshop_conclusion")}</p>

            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent3" href="https://rubiportuguez.github.io/Aprende-Shop/index.html" target="_blank" rel="noreferrer">{t("view_btn")}</a>
              <a className="btn btn-accent3" href="https://github.com/RubiPortuguez/Aprende-Shop/tree/develop" target="_blank" rel="noreferrer">{t("fr_repo_btn")}</a>
              <a className="btn btn-accent3" href="https://github.com/RubiPortuguez/AprendeShop-Backend/tree/develop" target="_blank" rel="noreferrer">{t("ba_repo_btn")}</a>
              <a className="btn btn-accent3" href="https://www.figma.com/design/MG8TBK9lzvWV1aU8pJSIPd/Borradores-AprendeShop?node-id=0-1&t=K5eREUPBSSRUzPKl-1" target="_blank" rel="noreferrer">🖥️ Figma</a>
              <button className="btn btn-accent3" onClick={() => setActiveModal("problem")}>{t("problem_solving_btn")}</button>
              <button className="btn btn-accent3" onClick={() => setActiveModal("storiesAS")}>{t("user_stories_btn")}</button>

            </div>
          </div>
        </Section>

        <Section id="JS" title="JSDemo">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              Mini Search App (JSdemo)</h3>
            <p className="mb-4">
              <Trans i18nKey="jsdemo_description">
                A simple JavaScript demo project: a user search app. <br />
                Built with <strong>Vanilla JS, HTML5, and CSS3</strong>. Fetch user data asynchronously from a REST API.
              </Trans>
            </p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent5" href="https://erikaahide.github.io/API-JS-PROMISES/" target="_blank" rel="noreferrer">{t("view_btn")}</a>
              <a className="btn btn-accent5" href="https://github.com/Erikaahide/API-JS-PROMISES" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
        </Section>

        <Section id="fitapp" title="FitAppDemo">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              {t("fitapp_description")}</h3>
            <p className=" mb-4">{t("fitapp_text")}</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent2" href="https://erikaahide.github.io/FitApp/" target="_blank" rel="noreferrer">{t("view_btn")}</a>
              <a className="btn btn-accent2" href="https://github.com/Erikaahide/FitApp?tab=readme-ov-file" target="_blank" rel="noreferrer">GitHub Repo</a>
              <a className="btn btn-accent2" href="https://www.figma.com/design/ZPpJGbMZmsWddn3i0icvXt/Portfolio?node-id=0-1&t=BCGzJieD65UEbvnu-0" target="_blank" rel="noreferrer">Wireframe</a>
              <button
                className="btn btn-accent2"
                onClick={() => setActiveModal("fit-problem")}
              >
                {t("problem_solving_btn")}
              </button>
              <button
                className="btn btn-accent2"
                onClick={() => setActiveModal("fit-stories")}
              >
                {t("user_stories_btn")}
              </button>
              <button
                className="btn btn-accent2"
                onClick={() => setActiveModal("fit-future")}
              >
                {t("future_features_btn")}
              </button>
            </div>
          </div>
        </Section>

        <Section id="figma" title="Figma">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">{t("figma_description")}</h3>
            <p className=" mb-4">
              {t("figma_text")}</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent7" href="https://www.figma.com/design/zsiRvaHp8P9v2CB2HxYtHE/Portfolio?node-id=0-1&t=1TMprCo3F1mFlZZx-1" target="_blank" rel="noreferrer">{t("portfolio_btn")}</a>
              <a className="btn btn-accent7" href="https://www.figma.com/design/ZPpJGbMZmsWddn3i0icvXt/Portfolio?node-id=0-1&t=BCGzJieD65UEbvnu-0" target="_blank" rel="noreferrer">Wireframe</a>
            </div>
          </div>
        </Section>

        <Section id="SQL" title="SQL">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">{t("SQL_subtitle")}</h3>
            <p className=" mb-4">
              {t("SQL_description")}</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>{t("SQL_task_1")}</li>
              <li>{t("SQL_task_2")}</li>
              <li>{t("SQL_task_3")}</li>
              <li>{t("SQL_task_4")}</li>
              <li>{t("SQL_task_5")}</li>
            </ul>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent6" href="https://github.com/Erikaahide/SQLpractices" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
        </Section>

        <Section id="adobe" title="AdobeSuite">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              {t("book")}</h3>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent4" href="https://drive.google.com/file/d/1LXkoXs2C3OjuENXDobDhNGNGjYEuHxeY/view?usp=sharing" target="_blank" rel="noreferrer">{t("portfolio_PDF_btn")}</a>
            </div>
          </div>
        </Section>

        <Section id="contact" title={t("contact_title")}>
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              {t("contact_subtitle")}
            </h3>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent" href="mailto:eahidehernandez@gmail.com" rel="noreferrer">📧 Email</a>
              <a className="btn btn-accent" href="http://www.linkedin.com/in/erikaahg-desarrolladora-web" target="_blank" rel="noreferrer">💼 LinkedIn</a>
              <a className="btn btn-accent" href="https://github.com/Erikaahide" target="_blank" rel="noreferrer">🐱 GitHub</a>
            </div>
          </div>
        </Section>

      </main>
      <footer className="container" style={{ padding: "2rem 0", opacity: 0.8 }}>
        <small className="muted">
          © {new Date().getFullYear()} ErikaA. {t("footer_rights")}
        </small>
      </footer>
    </div>
  );
}
