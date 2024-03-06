import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="appBackground">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="RestaurantWebAppV1/" exact Component={Home} />
          <Route path="RestaurantWebAppV1//Menu" exact Component={Menu} />
          <Route path="RestaurantWebAppV1//Orders" exact Component={Orders} />
          <Route path="RestaurantWebAppV1//Gallery" exact Component={Gallery} />
          <Route path="RestaurantWebAppV1//Contact" exact Component={Contact} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
