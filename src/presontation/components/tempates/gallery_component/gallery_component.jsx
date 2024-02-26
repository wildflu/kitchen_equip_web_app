import EquipmentCard from "../../cards/equipment_card/equipment_card";
import TheButton from '../../widgets/button/button'

function GalleryComponent() {
    return(
        <div className="gallery_component">
            <section className="description_section">
                <h4>Product Gallery</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut neque consequuntur 
                    incidunt nesciunt mollitia unde ducimus magnam eius placeat earum.
                </p>
            </section>
            <section className="products_section">
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
            </section>
            <TheButton />
        </div>
    )
}

export default GalleryComponent;