import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LayoutCinema from "./pages/User/Layout/LayoutCinema.jsx";
import HomePage from "./pages/User/HomePage/HomePage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutCinema />}>   
            {/*User Page*/ }            
            <Route path="/homepage" element={<HomePage />}>
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
