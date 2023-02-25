import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import {Firstpage , Register} from "./components"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
