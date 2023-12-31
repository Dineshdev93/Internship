import Header from "./components/Header/Navbars";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userprofile/:id" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
