
import kitchen from '../../../../assets/kitchen.svg';
import TheButton from '../../widgets/button/button';

function AboutComponent() {
    return(
        <div className="about_component">
            <section className="about_comp_img">
                <img src={kitchen} alt="" />
            </section>
            <section className='about_comp_desctiption'>
                <label> About Us </label>
                <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo totam molestiae, 
                    ipsum sunt odit earum accusamus quam consectetur laudantium.
                </p>
                <TheButton />
            </section>

        </div>
    )
}
export default AboutComponent;