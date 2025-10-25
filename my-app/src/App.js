import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import { Test1 } from "./Test";
import Demo from "./Demo";
import Task from "./Task";
import File1 from "./File1";
import File2 from "./File2";
import File3 from "./File3";
import File4 from "./File4";
import File5 from "./File5";
import Data1 from "./Data1";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
<BrowserRouter>
 <Routes>
 <Route path="/" element ={<Data1/>}></Route>
 <Route path="/file1" element ={<File1/>}></Route>
 <Route path="/file2" element ={<File2/>}></Route>
 <Route path="/file3" element ={<File3/>}></Route>

 </Routes> 
 
 </BrowserRouter>
    </div>
    // // <h1>
    //   {/* hello */}
    //   {/* <Test />
    //   // <Test1/>
    //   // <Demo/>
    //   {/* <Task/> */}
    //   {/* <File2 /> */}
    //   {/* <Demo/> */}
    //   {/* <File3 /> */}
    //   {/* <File4/> */}
    //   {/* <File5/> */}
    // // </h1>
  );
}

export default App;
