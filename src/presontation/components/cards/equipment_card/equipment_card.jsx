import { faHeart, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kitchen from "../../../../assets/smart6.webp";
import Data from "../../../../consts/data";


import { useState } from "react";
import Equipmetn from "../../../../model/equipment";

function EquipmentCard(props) {
    const [isliked, setIsliked] = useState(false);
    const addToMyBag = ()=>{
        Data.MyBag.push(new Equipmetn(props.id, props.name, props.price, props.oldprice, props.img, props.catigury))
        console.log(Data.MyBag);
    }
    return(
        <div className="equipment_card">
            <section className="card_btns" >
                <span className="like_icon" onClick={()=> setIsliked(!isliked)} style={{color: isliked?"#ab38d9":"#888"}}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className="shop_icon" onClick={addToMyBag}>
                    <FontAwesomeIcon icon={faBagShopping} />
                </span>
            </section>
            <section className="card_img">
                <img src={props.img} alt="" />
            </section>
            <section className="card_info">
                <h4>{props.name}</h4>
                <p><span>${props.price}</span> <p>${props.oldprice}</p></p>
            </section>
        </div>
    )
}
export default EquipmentCard;