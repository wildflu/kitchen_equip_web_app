
import kitchen from '../../../../assets/kitchen.svg';

function StayUpdatedComponent() {
    return(
        <div className="stay_updated_component">
            <section className='stay_updated_profile_section'>
                <img src={kitchen} alt="" />
            </section>
            <section className='stay_updated_info'>
                <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Quos in labore distinctio cupiditate repudiandae delectus saepe
                    expedita repellat quia exercitationem!
                </p>
                <span className='form_sub'>
                    <input type="text" placeholder='Email Adress'/>
                    <button>Subscribe</button>
                </span>
                <span className='terms_section'>
                    <input type="radio" id="radio1" className="radio-group" />
                    <label htmlFor="radio1" className="radio-custom">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nulla!
                    </label>
                </span>
            </section>
        </div>
    )
}

export default StayUpdatedComponent;