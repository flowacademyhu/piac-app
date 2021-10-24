import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Header.css';
import MainPage from '../pages/MainPage';
import VendorPage from '../pages/VendorPage';
import VendorProfilePage from '../pages/VendorProfilePage';

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/arusok">
              <VendorPage />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/arusprofil">
              <VendorProfilePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
