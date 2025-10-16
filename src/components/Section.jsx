import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="container stack" style={{ padding: "3rem 0" }}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="card">{children}</div>
    </section>
  );
}
