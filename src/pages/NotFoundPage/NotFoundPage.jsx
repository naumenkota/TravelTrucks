import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";

export default function NotFoundPage() {
    const nav = useNavigate();

      return (
        <div>
              <h2>Page is not found</h2>
              
              <Button  onClick={() => nav(-1)}>Go Back</Button>
              
        </div>
    )
}