import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";

function App() {
  return (
    <div className="App">
      <Room />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
