import "./App.css"
import Profile from "./components/Profile/Profile";
import Auth from "./pages/home/Auth/Auth";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{right:'0', top:'-18%'}}></div>
      <div className="blur" style={{left:'-8rem', top:'36%'}}></div>
      <Home />  
      {/* <Profile /> */}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
