import TablesPage from "./pages/TablesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Router>
        <Routes>
          <Route exact path="/tablazatok" element={<TablesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
