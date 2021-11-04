import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Header.css';
import MainPage from '../pages/MainPage';
import VendorPage from '../pages/VendorPage';
import VendorProfilePage from '../pages/VendorProfilePage';
import VendorsByMarketPage from '../pages/VendorsByMarketPage';
import Footer from './Footer';
import '../../node_modules/delayed-scroll-restoration-polyfill/index';

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
            <Route
              exact
              path="/arusok/:id/:piacok"
              component={VendorProfilePage}
            />
          </Switch>
          <Footer />
        </Router>
  );
};

export default App;
