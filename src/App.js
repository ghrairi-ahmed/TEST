import "./App.css";

import Profile from "./profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile myprofession="I Learn Development Web At Go My Code"  mybio="Im 19"  name="Ahmed" lastName="Ghrairi">
        <img className="alo" src="../ahmed.jpg" alt="Ahmed" />
        
      </Profile>
    </div>
  );
}

export default App;
