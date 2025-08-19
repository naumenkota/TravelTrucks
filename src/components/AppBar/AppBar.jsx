import TravelTrucks from "../../assets/TravelTrucks.svg";
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";
import Container from "../Container/Container.jsx";
import s from "./AppBar.module.css";

export default function AppBar() {
    return (
        
            <header className={s.header}>  
              <Link to="/"> 
                <img src={TravelTrucks} alt="TravelTrucks Logo" />
             </Link>
              <Nav/>
            </header>
        
    )
}