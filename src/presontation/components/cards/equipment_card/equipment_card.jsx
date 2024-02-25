import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kitchen from "../../../../assets/kitchen.svg";

function EquipmentCard() {
    return(
        <div className="equipment_card">
            <section className="card_btns">
                <span className="like_icon">
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className="shop_icon">
                    <FontAwesomeIcon icon={faBagShopping} />
                </span>
            </section>
            <section className="card_img">
                <img src={kitchen} alt="" />
            </section>
            <section className="card_info">
                <h4>Equipment Name</h4>
                <p><span>$13.89</span> <p>$20.00</p></p>
            </section>
        </div>
    )
}
export default EquipmentCard;