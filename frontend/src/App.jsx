import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Materias from "./Pages/Materias";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/materias" element={<Materias />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
