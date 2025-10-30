import React from "react";
import Section from "../Section";
import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Github} from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <Section id="contact" title={t("contact_title")}>
      <div className="stack">
        <h3 className="text-xl font-bold mb-2">
          {t("contact_subtitle")}
        </h3>

        <div className="flex flex-wrap gap-2">
          <a
            className="btn btn-accent flex items-center gap-2"
            href="mailto:eahidehernandez@gmail.com"
            rel="noreferrer"
          >
            <Mail size={18} /> Email
          </a>

          <a
            className="btn btn-accent flex items-center gap-2"
            href="http://www.linkedin.com/in/erikaahg-desarrolladora-web"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} /> LinkedIn
          </a>

          <a
            className="btn btn-accent flex items-center gap-2"
            href="https://github.com/Erikaahide"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> GitHub
          </a>

        </div>
      </div>
    </Section>
  );
}
