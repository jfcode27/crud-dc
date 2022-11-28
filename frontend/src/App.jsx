import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Detalle from "./Pages/Detalle";
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
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
