import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MarketTablePage from "./market/MarketTablePage";
import VendorTablePage from "./pages/VendorTablePage";
import Menu from "./components/Menu";
import VendorDetails from "./pages/VendorDetails";
import LoginPage from "./pages/LoginPage";
import TokenExchange from "./pages/TokenExchange";
import { getToken } from "./components/AuthService";
import NewMarket from "./market/NewMarket";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {getToken() ? (
          <>
            <Menu />
            <Routes>
              <Route path="/piac">
                <Route index element={<MarketTablePage />} />
                <Route path="uj" element={<NewMarket />} />
              </Route>
              <Route path="/arus">
                <Route index element={<VendorTablePage />} />
                <Route path="uj" element={<VendorDetails />} />
                <Route path="szerkeszt" element={<VendorDetails />} />
              </Route>
              <Route path="/" element={<Navigate to="/piac" replace />}></Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/token/:token" element={<TokenExchange />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        )}
      </Router>
    </QueryClientProvider>
  );
}

export default App;
