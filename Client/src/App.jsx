import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Signup from "./Signup";
import Home from './home'

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/home" element = {<Home />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
