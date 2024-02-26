
import { Link } from "react-router-dom";
import EquipmentCard from "../../components/cards/equipment_card/equipment_card";
function ProductsPage(){
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
                    <Link className="carigury_route_active">
                        All
                        <span className="catigury_marker"></span>
                    </Link>
                    <Link className="carigury_route">Smart</Link>
                    <Link className="carigury_route">Electronique</Link>
                    <Link className="carigury_route">Nifes</Link>
                    <Link className="carigury_route">New</Link>
                    <Link className="carigury_route">Super</Link>
                </nav>
            </section>
            <section className="Products_contaier">
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
            </section>
        </div>
    )
}

export default ProductsPage;