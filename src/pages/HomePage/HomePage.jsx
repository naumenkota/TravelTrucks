import s from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";



export default function HomePage() {
    return (
        <div className={s.hero}>  
           
               
        <h1 className={s.title}>Campers of your dreams</h1>
        <p className={s.text}>You can find everything you want in our catalog</p>
            <Link to="/catalog" className={s.link}>
                View Now
                    </Link>
                     
                  
            </div>
    )
}