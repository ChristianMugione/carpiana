import { Footer } from "../footer/Footer";
import "./HeroStyles.css";

export const Hero = () => {
  return (
    <section className="section">
      <main className="hero-container">
        <div className="hero-text">
          <h2>
            DESCUBRE EL <span>PODER DE LA WEB</span>
          </h2>
          <h3>Potenciamos tu negocio mostrándolo al mundo entero</h3>
          <div className="hero-btns">
            <button>COMENCEMOS YA!</button>
          </div>
        </div>
        <Footer />
      </main>
    </section>
  );
};
