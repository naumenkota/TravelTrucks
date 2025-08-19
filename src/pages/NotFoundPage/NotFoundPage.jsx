import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import s from "./NotFoundPage.module.css"

export default function NotFoundPage() {
    const nav = useNavigate();

      return (
        <div className={s.wrapper}>
          <h1 className={s.title}>404</h1>  
          <h2 className={s.subtitle}>Page not found &#128577;</h2>
          <Button  onClick={() => nav(-1)}>Go Back</Button>
        </div>
    )
}