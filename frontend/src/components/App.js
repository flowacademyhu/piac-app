import { useState } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Header.css';
import MainPage from '../pages/MainPage';
import VendorPage from '../pages/VendorPage';

const App = () => {
  const [vendorId, setVendorId] = useState(null);

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
              <VendorPage vendorId={vendorId} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
