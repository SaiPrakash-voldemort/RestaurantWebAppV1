import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import HomeContent from "./components/HomeContent";

function App() {
  return (
    <div className="appBackground">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Menu" exact Component={Menu} />
          <Route path="/Orders" exact Component={Orders} />
          <Route path="/Gallery" exact Component={Gallery} />
          <Route path="/Contact" exact Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
