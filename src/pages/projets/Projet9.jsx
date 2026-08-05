import { content } from "../../constants/Content";
import { Link } from "react-router-dom";

export default function Projet4() {
    return (
        <div>
            <Link to="/projets">
                {content.projets.back}
            </Link>
            <h1>
                Projet 9
            </h1>
        </div>
    )
}
