import React from "react";
import { useTranslation } from "react-i18next";
import Section from "./Section";

export default function AboutSection({ setActiveModal }) {
    const { t } = useTranslation();

    return (
        <Section id="about" title={t("about_title")}>
            <div className="stack">
                <h2 className="text-2xl font-bold mb-2">{t("about_intro")}</h2>
                <p className="mb-4">{t("about_text")}</p>

                <p>{t("about_linkedin_intro")}</p>
                <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                    <a
                        className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300"
                        href="http://www.linkedin.com/in/erikaahg-desarrolladora-web"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t("about_linkedin_btn")}
                    </a>

                    <button
                        className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300"
                        onClick={() => setActiveModal("skills")}
                    >
                        {t("modal_skills_title")}
                    </button>

                    <button
                        className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300"
                        onClick={() => setActiveModal("education")}
                    >
                        {t("modal_education_title")}
                    </button>
                    <button
                        className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300"
                        onClick={() => setActiveModal("extra_education")}
                    >
                        {t("modal_extra_education_title")}
                    </button>
                </div>
            </div>
        </Section>
    );
}
