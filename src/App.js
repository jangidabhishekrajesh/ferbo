import './App.css';
import Mainpage from './components/Mainpage';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
   <>
   <Router>
      <Navbar/>
      <Mainpage/>
   </Router>
   </>
  );
}

export default App;
