import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/Header.css";
import MainPage from "./market/list/MainPage";
import VendorsByMarketPage from "./market/profile/VendorsByMarketPage";
import VendorPage from "./vendor/list/VendorPage";
import VendorProfilePage from "./vendor/profile/VendorProfilePage";
import Footer from "./components/Footer";
import "delayed-scroll-restoration-polyfill/index";

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/piacok/:id" component={VendorsByMarketPage} />
            <Route exact path="/arusok" component={VendorPage} />
            <Route exact path="/arusok/:id" component={VendorProfilePage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
