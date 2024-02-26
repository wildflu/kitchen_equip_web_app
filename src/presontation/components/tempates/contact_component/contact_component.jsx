
import contact from '../../../../assets/contact.svg';

function ContactComponent(){
    return(
        <div className="contact_component">
            <section className="contact_form">
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Sebject'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='your meassage'></textarea>
                <button>Send Message</button>
            </section>
            <section className="contact_img">
                <img src={contact} alt="" />
            </section>
        </div>
    )
}

export default ContactComponent;