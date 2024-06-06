import { Footer } from "../footer/Footer";
import "./HeroStyles.css";

export const Hero = () => {
  return (
    <section className="section">
      <main className="hero-container">
        <div className="hero-text">
          <h2>CREAMOS TU PRESENCIA ONLINE</h2>
          <h3>Desarrollamos sitios web que cautivan y convierten</h3>
          <div className="hero-btns">
            <button>COMENCEMOS YA!</button>
            <button>MAS INFO</button>
          </div>
        </div>
        <Footer />
      </main>
    </section>
  );
};
