import React from "react";
import { X } from "lucide-react";

export default function ASRegistroModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[var(--surface)] text-[var(--text)] p-8 rounded-2xl max-w-3xl w-[90%] shadow-xl relative animate-fadeIn overflow-y-auto max-h-[90vh]">
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold text-[var(--accent-improve-from)] mb-4 text-center">
          Registration
        </h2>

        {/* Descripción breve */}
        <p className="text-sm opacity-80 text-justify mb-6">
          The <strong>Registration</strong> section enables new users to create
          an account within the AprendeShop platform. It features a guided form
          with validation feedback, clean layout, and clear UX to ensure an easy
          onboarding process for both students and instructors.
        </p>

        {/* Estructura */}
        <h3 className="font-semibold text-lg mb-2 text-[var(--accent-improve-from)]">
          Structure
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            <strong>Header:</strong> A welcoming banner introduces the page with
            the title <em>“Regístrate y accede a la plataforma.”</em>
          </li>
          <li>
            <strong>Registration Form:</strong> Includes input fields for name,
            email, phone number, password, and user type (student or instructor).
          </li>
          <li>
            <strong>Password Validation:</strong> Dual password fields verify
            matching entries and enforce secure password rules (8+ characters,
            uppercase, lowercase, number, special character).
          </li>
          <li>
            <strong>User Type Selector:</strong> Dropdown menu to define the user
            role and personalize the onboarding experience.
          </li>
          <li>
            <strong>Submit Button:</strong> Final call to action styled with the
            brand palette and consistent hover effects.
          </li>
        </ul>

        {/* Tecnologías */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>HTML5 and Bootstrap 5.3.7 for responsive structure and layout.</li>
          <li>
            JavaScript (<code>registro.js</code>) for field validation, password
            logic, and user feedback.
          </li>
          <li>
            SweetAlert2 for success and error pop-ups after form submission.
          </li>
          <li>
            EmailJS integration prepared for future automated registration
            confirmations.
          </li>
          <li>
            Custom CSS (<code>style.css</code>) for visual consistency with the
            AprendeShop theme.
          </li>
        </ul>

        {/* Diseño */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Design Highlights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            Centered card layout with shadow and rounded edges for a friendly,
            focused interface.
          </li>
          <li>
            Clear label hierarchy and feedback indicators for accessibility and
            trust.
          </li>
          <li>
            Subtle color palette and visual spacing ensure readability and
            balance.
          </li>
          <li>
            Responsive design that adapts perfectly to mobile, tablet, and
            desktop screens.
          </li>
        </ul>

        {/* Cierre */}
        <div className="mt-8 text-center">
          <p className="text-sm italic opacity-70">
            “Registro” simplifies onboarding — offering a secure, accessible, and
            visually cohesive entry point into the AprendeShop experience.
          </p>
        </div>
      </div>
    </div>
  );
}
