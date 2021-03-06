import AppStyled from "./styles/AppStyled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./market/list/MainPage";
import VendorsByMarketPage from "./market/profile/VendorsByMarketPage";
import VendorPage from "./vendor/list/VendorPage";
import VendorProfilePage from "./vendor/profile/VendorProfilePage";
import Footer from "./footer/Footer";
import "delayed-scroll-restoration-polyfill/index";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";

const queryClient = new QueryClient();

const BodyContent = styled("div")`
  padding-bottom: 80px;
`;

const App = () => {
  return (
    <>
      <AppStyled />
      <div className="container-fluid">
        <QueryClientProvider client={queryClient}>
          <Router>
            <BodyContent>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route
                  exact
                  path="/piacok/:id"
                  component={VendorsByMarketPage}
                />
                <Route exact path="/arusok" component={VendorPage} />
                <Route exact path="/arusok/:id" component={VendorProfilePage} />
              </Switch>
            </BodyContent>
            <Footer />
          </Router>
        </QueryClientProvider>
      </div>
    </>
  );
};

export default App;
