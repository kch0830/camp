import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";
import LoginForm from "./components/LoginForm";
import Form from "./components/Form";
import Chan from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="LoginForm" element={<LoginForm />} />
        <Route path="Form" element={<Form />} />
        <Route path="Room" element={<Room />} />
        <Route path="Calendar" element={<Chan />} />
      </Routes>
    </div>
  );
}

export default App;
