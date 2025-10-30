import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ExternalLink, Figma, Github } from "lucide-react";

export default function AprendeShopDetail() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface)] text-[var(--text)]">

      {/* === HERO === */}
      <section className="relative bg-gradient-to-r from-[var(--accent-improve-from)] to-[var(--accent-improve-to)] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-muted font-bold mb-4">AprendeShop</h1>
          <p className="text-lg opacity-90">{t("aprendeshop_detail_subtitle")}</p>
        </div>
        <a
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-white opacity-90 hover:opacity-100 transition"
        >
          <ArrowLeft size={18} />
          <span>{t("back_to_portfolio")}</span>
        </a>
      </section>

      {/* === OVERVIEW === */}
      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-3">{t("project_overview_title")}</h2>
          <p className="leading-relaxed text-[var(--text-muted)]">
            {t("project_overview_text")}
          </p>
        </section>

        {/* === UX PROCESS === */}
        <section>
          <h2 className="text-2xl font-bold mb-6">{t("ux_process_title")}</h2>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { key: "understand" },
              { key: "ideate" },
              { key: "design" },
              { key: "develop" },
              { key: "validate" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-improve-from)] text-white flex items-center justify-center font-semibold mb-2">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-1">{t(`ux_${s.key}_title`)}</h3>
                <p className="text-sm opacity-80">{t(`ux_${s.key}_desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === ROLE & DURATION === */}
        <section className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{t("my_role_title")}</h2>
            <p className="leading-relaxed text-[var(--text-muted)]">
              {t("my_role_text")}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">{t("duration_title")}</h2>
            <p>{t("duration_text")}</p>
          </div>
        </section>

        {/* === TECHNICAL SECTION === */}
        <section>
          <h2 className="text-2xl font-bold mb-4">{t("technical_title")}</h2>
          <ul className="list-disc list-inside space-y-2 text-[var(--text-muted)]">
            {[
              "tech_json",
              "tech_emails",
              "tech_front",
              "tech_back",
              "tech_deploy_git",
              "tech_deploy_aws",
            ].map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </section>

        {/* === VISUAL SECTION === */}
        <section>
          <h2 className="text-2xl font-bold mb-4">{t("visual_title")}</h2>
          <p className="mb-6 text-[var(--text-muted)]">{t("visual_text")}</p>
          <img
            src="pendiente"
            alt="Mockup AprendeShop"
            className="rounded-2xl shadow-md w-full border border-[var(--border)]"
          />
        </section>

        {/* === LINKS === */}
        <section className="text-center mt-16 space-y-4">
          <h2 className="text-2xl font-bold mb-4">{t("explore_title")}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://rubiportuguez.github.io/Aprende-Shop/index.html"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent3 flex items-center gap-2"
            >
              <ExternalLink size={18} /> {t("demo_btn")}
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
              <Github size={18} /> {t("repo_btn")}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
