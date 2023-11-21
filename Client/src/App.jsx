import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Signup from "./Signup";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
