import { BsPersonCircle } from "react-icons/bs";
import "./App.css";
import { AppWrapper } from "./components/AppWrapper";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Menu } from "./components/menu/Menu";
import { Usermenu } from "./components/usermenu/Usermenu";

function App() {
  return (
    <AppWrapper>
      <Header>
        <h1 className="logo">CARPIANA</h1>
        <Menu />
        <BsPersonCircle/>
        <Usermenu />
      </Header>
      <Hero />
      {/* <Footer /> */}
    </AppWrapper>
  );
}

export default App;
