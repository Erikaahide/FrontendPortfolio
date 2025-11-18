import React from "react";
import { X } from "lucide-react";

export default function ASLoginModal({ onClose }) {
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
          Login
        </h2>

        {/* Descripción breve */}
        <p className="text-sm opacity-80 text-justify mb-6">
          The <strong>Login</strong> section provides users with a secure and
          accessible gateway to the AprendeShop platform. It allows existing
          users to authenticate using their credentials through a simple,
          responsive interface that prioritizes clarity and trust.
        </p>

        {/* Estructura */}
        <h3 className="font-semibold text-lg mb-2 text-[var(--accent-improve-from)]">
          Structure
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            <strong>Header:</strong> Displays the AprendeShop logo and tagline —
            <em>“Aprende algo nuevo, un kit a la vez.”</em>
          </li>
          <li>
            <strong>Login Card:</strong> Compact centered form featuring email
            and password fields, styled for focus and usability.
          </li>
          <li>
            <strong>Error Handling:</strong> Alert element dynamically displays
            invalid credentials or connection errors.
          </li>
          <li>
            <strong>Submit Button:</strong> Styled with brand colors and smooth
            hover transitions for clear call-to-action.
          </li>
          <li>
            <strong>Scripts:</strong> Validation and authentication logic
            handled via <code>inicioDeSesion.js</code>.
          </li>
        </ul>

        {/* Tecnologías */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>HTML5 and Bootstrap 5.3.7 for structure, layout, and styling.</li>
          <li>
            Font Awesome and Bootstrap Icons for a modern, minimal aesthetic.
          </li>
          <li>
            JavaScript (<code>inicioDeSesion.js</code>) for login validation and
            form submission.
          </li>
          <li>
            SweetAlert2 integration prepared for user-friendly error or success
            alerts.
          </li>
          <li>
            Custom CSS (<code>inicio.css</code> and <code>style.css</code>) to
            match the brand palette and enhance readability.
          </li>
        </ul>

        {/* Diseño */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Design Highlights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            Centralized form with a soft shadow and rounded corners for visual
            balance and focus.
          </li>
          <li>
            Simple, accessible layout ensuring clarity in the authentication
            flow.
          </li>
          <li>
            Clean typography and contrast for easy readability on all devices.
          </li>
          <li>
            Consistent color palette aligning with the AprendeShop identity for
            cohesive brand perception.
          </li>
        </ul>

        {/* Cierre */}
        <div className="mt-8 text-center">
          <p className="text-sm italic opacity-70">
            “Login” ensures users can safely access their AprendeShop accounts —
            built with simplicity, accessibility, and trust in mind.
          </p>
        </div>
      </div>
    </div>
  );
}
