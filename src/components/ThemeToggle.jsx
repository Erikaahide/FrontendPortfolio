import React from "react";

function useTheme() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return { theme, toggle };
}

export default function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      className={`btn btn-circle ${className}`}
      onClick={toggle}
      aria-label="Toggle theme"
    >
      <span aria-hidden>{theme === "dark" ? "🌙" : "☀️"}</span>
      <span className="sr-only">Change theme</span>
    </button>
  );
}
