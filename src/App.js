import './App.css';
import Navbar from './components/Navbar/Navbar';
import { withAuth0 } from "@auth0/auth0-react";
import Landingpage from './components/Landingpage/Landingpage';



function App() {

  return (
    
    <div className="App">
      <Navbar ></Navbar>
      <Landingpage/>
    </div>
  );
}

export default withAuth0(App);
