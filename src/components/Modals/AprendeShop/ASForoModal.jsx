import React from "react";
import { X } from "lucide-react";

export default function ASForoModal({ onClose }) {
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
          Forum
        </h2>

        {/* Descripción breve */}
        <p className="text-sm opacity-80 text-justify mb-6">
          The <strong>Forum</strong> section of AprendeShop fosters community
          engagement by allowing users to share experiences, ask questions, and
          connect through course-related discussions. It’s designed as an
          interactive and friendly digital space that encourages collaboration
          and user-generated content.
        </p>

        {/* Estructura */}
        <h3 className="font-semibold text-lg mb-2 text-[var(--accent-improve-from)]">
          Structure
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            <strong>New Post Form:</strong> Left column with input fields for
            course name, content, and optional image URL, enabling users to
            create posts dynamically.
          </li>
          <li>
            <strong>Feed Section:</strong> Right column that displays posts
            created by users, structured in a vertical stack using Bootstrap’s
            <code>vstack</code>.
          </li>
          <li>
            <strong>Demo Controls:</strong> Buttons (<em>“Demo”</em> and
            <em>“Vaciar”</em>) to seed sample posts or clear the feed for
            testing purposes.
          </li>
          <li>
            <strong>Card Layout:</strong> Each post renders within a shadowed
            card for readability and visual separation.
          </li>
          <li>
            <strong>Validation:</strong> The form prevents empty submissions and
            ensures structured input through simple JS checks.
          </li>
        </ul>

        {/* Tecnologías */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>HTML5 and Bootstrap 5.3.7 for responsive grid and form layout.</li>
          <li>
            JavaScript (<code>foro.js</code>) handles post creation, validation,
            and dynamic rendering within the feed.
          </li>
          <li>
            SweetAlert2 for potential feedback pop-ups and user interactions.
          </li>
          <li>
            Custom CSS (<code>foro.css</code>) defines spacing, shadows, and
            post-card design consistent with the AprendeShop theme.
          </li>
          <li>
            Bootstrap Icons and Font Awesome for minimal, readable iconography.
          </li>
        </ul>

        {/* Diseño */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
         Design Highlights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            Two-column responsive layout that prioritizes readability and
            balance between post creation and content browsing.
          </li>
          <li>
            Rounded cards with soft shadows to distinguish posts visually.
          </li>
          <li>
            Consistent typography and spacing ensure a clean, open community feel.
          </li>
          <li>
            Encourages participation while maintaining simplicity and usability.
          </li>
          <li>
            Accessible color palette that matches AprendeShop’s inclusive brand
            identity.
          </li>
        </ul>

        {/* Cierre */}
        <div className="mt-8 text-center">
          <p className="text-sm italic opacity-70">
            “Foro” transforms AprendeShop into a collaborative hub — where users
            learn not only from courses but from each other.
          </p>
        </div>
      </div>
    </div>
  );
}
