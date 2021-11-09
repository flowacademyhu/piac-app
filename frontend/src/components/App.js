import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Header.css";
import MainPage from "../pages/MainPage";
import VendorPage from "../pages/VendorPage";
import VendorProfilePage from "../pages/VendorProfilePage";
import VendorsByMarketPage from "../pages/VendorsByMarketPage";
import Footer from "./Footer";
import "../../node_modules/delayed-scroll-restoration-polyfill/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/piacok/:id">
          <VendorsByMarketPage />
        </Route>
        <Route exact path="/arusok">
          <VendorPage />
        </Route>
        <Route exact path="/arusok/:id">
          <VendorProfilePage />
        </Route>
        <Route exact path="/arusok/:id/:piacok">
          <VendorProfilePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
