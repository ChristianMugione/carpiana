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
        <div className="logo">CARPIANA</div>
        <Menu />
        <Usermenu />
      </Header>
      <Hero />
      {/* <Footer /> */}
    </AppWrapper>
  );
}

export default App;
