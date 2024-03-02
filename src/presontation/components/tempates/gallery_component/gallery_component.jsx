import Data from "../../../../consts/data";
import EquipmentCard from "../../cards/equipment_card/equipment_card";
import TheButton from '../../widgets/button/button'


function GalleryComponent() {
    const data = Data.allEquipments.slice(0, 8);

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
                {data.map(equipment => (
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
            <TheButton label='Find All' to='/products'/>
        </div>
    )
}

export default GalleryComponent;