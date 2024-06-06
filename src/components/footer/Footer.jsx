import { Social } from "../social/Social";
import "./Footer.css";

export const Footer = () => {
  return (
    <section className="footer container">
      <a href="">Carpiana</a>
      <a href="">Todos los derechos reservados</a>
      <Social />
    </section>
  );
};
