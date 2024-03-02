
import { Link } from "react-router-dom";
import EquipmentCard from "../../components/cards/equipment_card/equipment_card";
import { useState } from "react";

import Data from "../../../consts/data";




function ProductsPage(){

    const [catigutyRoute, setCatiguryRoute] = useState(0)

    const getCategoryName = (route) => {
        switch (route) {
            case 1:
                return 'Smart';
            case 3:
                return 'Knives';
            case 4:
                return 'New';
            case 5:
                return 'Super';
            default:
                return '';
        }
    }

    const filteredEquipments = catigutyRoute !== 0
        ? Data.allEquipments.filter(equipment => equipment.catigury === getCategoryName(catigutyRoute))
        : Data.allEquipments;




    return(
        <div className="products_page">
            <section className="products_page_desctiption">
                <h4>
                    Out Projects <span>Gallery</span>
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam porro eius neque unde quod tempora soluta rerum aliquid ratione quibusdam!
                </p>
                <nav className="products_nav">
                    <Link onClick={()=>setCatiguryRoute(0)} className={catigutyRoute ===0 ?"carigury_route_active":"carigury_route"}>
                        All
                        <span className="catigury_marker"></span>
                    </Link>
                    <Link onClick={()=>setCatiguryRoute(1)} className={catigutyRoute ===1 ?"carigury_route_active":"carigury_route"}>Smart <span className="catigury_marker"></span></Link>
                    <Link onClick={()=>setCatiguryRoute(3)} className={catigutyRoute ===3 ?"carigury_route_active":"carigury_route"}>knives <span className="catigury_marker"></span></Link>
                    <Link onClick={()=>setCatiguryRoute(4)} className={catigutyRoute ===4 ?"carigury_route_active":"carigury_route"}>New <span className="catigury_marker"></span></Link>
                    <Link onClick={()=>setCatiguryRoute(5)} className={catigutyRoute ===5 ?"carigury_route_active":"carigury_route"}>Super <span className="catigury_marker"></span></Link>
                </nav>
            </section>
            <section className="Products_contaier">

                {filteredEquipments.map(equipment => (
                    <EquipmentCard 
                            key={equipment.id} 
                            img={equipment.img} 
                            name={equipment.name} 
                            price={equipment.price} 
                            oldprice={equipment.oldprice} 
                            catigury = {equipment.catigury} 
                            id={equipment.id}
                        />
                ))}

            </section>
        </div>
    )
}

export default ProductsPage;