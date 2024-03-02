
import kitchen from '../../../../assets/kitchen.svg';
import TheButton from '../../widgets/button/button';
function IntroductionComponent(){
    return(
        <div className="introduction_component">
            <section className="description_intoduction">
                <label> Smart <p>Kitchen</p> </label>
                <h4>Make Your Ketchen Smart With Our Tools</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing consectetur, adipisicing elit. Odio, recusandae.
                </p>
                <TheButton label='Know More'/>
            </section>
            <section className="image_intoduction">
                <img src={kitchen} alt="" />
            </section>
        </div>
    )
}
export default IntroductionComponent;