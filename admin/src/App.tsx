import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MarketTablePage from "./market/MarketTablePage";
import VendorTablePage from "./vendor/VendorTablePage";
import Menu from "./components/Menu";
import NewVendor from "./vendor/NewVendor";
import EditVendor from "./vendor/EditVendor";
import LoginPage from "./pages/LoginPage";
import TokenExchange from "./pages/TokenExchange";
import { getToken } from "./components/AuthService";
import NewMarket from "./market/NewMarket";
import EditMarket from "./market/EditMarket";
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
                <Route path="szerkeszt/:id" element={<EditMarket />} />
                <Route
                  path="*"
                  element={<Navigate to="/piac" replace />}
                ></Route>
              </Route>
              <Route path="/arus">
                <Route index element={<VendorTablePage />} />
                <Route path="uj" element={<NewVendor />} />
                <Route path="szerkeszt/:id" element={<EditVendor />} />
              </Route>
              <Route path="/" element={<Navigate to="/piac" replace />}></Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/token/:token" element={<TokenExchange />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        )}
      </Router>
    </QueryClientProvider>
  );
}

export default App;
