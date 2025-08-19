import TravelTrucks from "../../assets/TravelTrucks.svg";
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";

export default function AppBar() {
    return (
        <header>  
            <Link to="/"> 
                <img src={TravelTrucks} alt="TravelTrucks Logo" />
            </Link>
            <Nav/>
        </header>
    )
}