import { useState } from "react";
import "./App.css";

import Profile from "./profile/Profile";

function App() {
  const[show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>Show profile </button>
     {show ? <Profile myprofession="I Learn Development Web At Go My Code"  mybio="Im 19"  name="Ahmed" lastName="Ghrairi">
        <img className="alo" src="../ahmed.jpg" alt="Ahmed" /> </Profile> : null}
        
     
    </div>
  );
}

export default App;
