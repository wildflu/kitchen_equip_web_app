
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TheButton(props) {
    return (
        <Link className="btn_find_all" to={props.to}>
            {props.label} 
            <span className="icon_btn_find_all">
                <FontAwesomeIcon icon={faCaretRight} />
            </span>
        </Link>
    )
}
export default TheButton;