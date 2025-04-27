import { useEffect } from "react";
import "./App.css";

const sections = ["Главная", "Обо мне", "Проекты", "Контакты"];

export default function App() {
  useEffect(() => {
    const handleWheel = (e) => {
      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = document.querySelectorAll(".section");
      const current = Math.round(window.scrollY / window.innerHeight);
      const next = Math.min(
        Math.max(current + direction, 0),
        sections.length - 1
      );
      window.scrollTo({
        top: next * window.innerHeight,
        behavior: "smooth",
      });
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="wrapper">
      {sections.map((title, i) => (
        <section
          key={i}
          className="section"
          style={{ backgroundColor: `hsl(${i * 80}, 70%, 20%)` }}
        >
          <h1>{title}</h1>
        </section>
      ))}
    </div>
  );
}
