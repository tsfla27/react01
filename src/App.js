import logo from './logo.svg';
import './App.css';
import AppLista from './protegido/sistemacrud/AppLista';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './public/Dashboard';
import Home from './public/Home';
import BarraRutasPublic from './ruteo/BarraRutasPublic';
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import { useAuth} from "./ruteo/AuthContext"



function App() {
  const {user} = useAuth();
  return (
    <div style={{background: "violet"}}>
      <h1>App.js</h1>
      <i class="large material-icons">home</i>
      <Router>
        {user ? <BarraRutasProtected/> : <BarraRutasPublic/> }
        
      </Router>
      
              
    </div>
  );
}

export default App;




//style={{background: "violet", width:"350px", padding:"10px"

