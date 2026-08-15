import { Link } from "react-router-dom";
import arrowRight from "../assets/arrow_right.svg";

export default function NextButton({ children, toLink }) {
    return (
        <Link className={'previous-button'} to={toLink} >
            <img
                src={arrowRight}
                className="screen__image screen__image--arrow screen__image--arrow--mirrored"
                alt="Previous"
            />
            <span className="game-controls">{children}</span>
        </Link>
    );
}