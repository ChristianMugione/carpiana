import { BsPersonCircle } from "react-icons/bs";
import "./App.css";
import { AppWrapper } from "./components/AppWrapper";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Menu } from "./components/menu/Menu";
import { Usermenu } from "./components/usermenu/Usermenu";
import { useSelector } from "react-redux";
import { store } from "./store/store";
import { userMenuShowTogle } from "./store/slices";

function App() {
  const userMenuShow = useSelector((state) => state.status.userMenuShow);

  const toggleMenuShow = () => {
    store.dispatch(userMenuShowTogle());
  };

  return (
    <AppWrapper>
      <Header>
        <h1 className="logo">CARPIANA</h1>
        <Menu />
        <BsPersonCircle onClick={toggleMenuShow} />
        {userMenuShow && <Usermenu />}
      </Header>
      <Hero />
      {/* <Footer /> */}
    </AppWrapper>
  );
}

export default App;
