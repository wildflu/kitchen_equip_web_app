
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function EquipmentCardBag({ id, img, name, price, oldprice, removeFromBag }) {




    return(
        <div className="equipment_card">
            <section className="card_btns" >
                <span className="shop_icon" onClick={() => removeFromBag(id)}>
                    <FontAwesomeIcon icon={faXmark} />
                </span>
            </section>
            <section className="card_img">
                <img src={img} alt="" />
            </section>
            <section className="card_info">
                <h4>{name}</h4>
                <p><span>${price}</span> <p>${oldprice}</p></p>
            </section>
        </div>
    )
}
export default EquipmentCardBag;