import "./App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Menu } from "./components/menu/Menu";

function App() {
  return (
    <>
      <Header>
        <div className="logo">Logo</div>
        <Menu />
      </Header>
      <Hero />
    </>
  );
}

export default App;
