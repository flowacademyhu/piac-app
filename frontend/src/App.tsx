import AppStyled from "./styles/AppStyled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./market/list/MainPage";
import VendorsByMarketPage from "./market/profile/VendorsByMarketPage";
import VendorPage from "./vendor/list/VendorPage";
import VendorProfilePage from "./vendor/profile/VendorProfilePage";
import Footer from "./footer/Footer";
import "delayed-scroll-restoration-polyfill/index";
import BodyPadding from "./styles/BodyPadding";

const App = () => {
  return (
    <>
      <AppStyled />
      <div className="container-fluid">
        <Router>
          <BodyPadding>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/piacok/:id" component={VendorsByMarketPage} />
              <Route exact path="/arusok" component={VendorPage} />
              <Route exact path="/arusok/:id" component={VendorProfilePage} />
            </Switch>
          </BodyPadding>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
