
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function TheButton() {
    return (
        <button className="btn_find_all">Find All <span className="icon_btn_find_all"><FontAwesomeIcon icon={faCaretRight} /></span></button>
    )
}
export default TheButton;