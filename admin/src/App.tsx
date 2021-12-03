import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MarketTablePage from "./market/MarketTablePage";
import VendorTablePage from "./pages/VendorTablePage";
import Menu from "./components/Menu";
import VendorDetails from "./pages/VendorDetails";
import LoginPage from "./components/LoginPage";
import TokenExchange from "./pages/TokenExchange";
import { getToken } from "./components/AuthService";
import MarketDetails from "./pages/MarketDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {getToken() ? (
          <>
            <Menu />
            <Routes>
              <Route path="/piac" element={<MarketTablePage />} />
              <Route path="/arus" element={<VendorTablePage />} />
              <Route path="/arus/uj" element={<VendorDetails />} />
              <Route path="/piac/uj" element={<MarketDetails />} />
              <Route path="/arus/szerkeszt" element={<VendorDetails />} />
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