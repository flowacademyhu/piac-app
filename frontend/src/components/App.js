import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import VendorHeader from './HomeVendorHeader';
import Footer from './Footer';
import './Header.css';
import MainPage from '../pages/MainPage';

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
