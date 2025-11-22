import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";
import { Figma } from "lucide-react";

export default function GoogleSection() {
  const { t } = useTranslation();
  const courses = t("google_courses", { returnObjects: true });

  return (
    <Section id="google" title="Google Certification">
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">{t("google_description")}</h3>
        <p className="mb-4">{t("google_text")}</p>

        <ul className="list-disc list-inside mb-4 text-sm space-y-1">
          {courses.map((course, idx) => (
            <li key={idx}>{course}</li>
          ))}
        </ul>

        {/* Dot progress */}
        <div className="flex items-center gap-1 mt-4">
          {Array.from({ length: 7 }).map((_, idx) => (
            <div
              key={idx}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: idx < 3 ? "var(--accentG)" : "var(--border)",
              }}
            ></div>
          ))}
        </div>


        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          <a
            className="btn btn-accentG"
            href="https://www.figma.com/design/ZPpJGbMZmsWddn3i0icvXt/Google-certification?node-id=0-1&t=WaTnWaBdfxX4k7l4-1"
            target="_blank"
            rel="noreferrer"
          >
            <Figma size={18} /> Figma
          </a>
        </div>
      </div>
    </Section>
  );
}
