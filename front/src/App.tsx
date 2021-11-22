import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";

function App() {
  return (
    <Routes>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
