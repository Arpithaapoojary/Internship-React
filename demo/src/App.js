import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import File1 from "./File1";
import File2 from "./File2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/File1" element={<File1 />}></Route>
          <Route path="/File2" element={<File2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
