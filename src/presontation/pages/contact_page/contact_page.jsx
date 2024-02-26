import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactComponent from "../../components/tempates/contact_component/contact_component";
import { faFacebook, faInstagram ,faSnapchat, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";


function ContactPage(){
    return (
        <div className="contact_page">
            <div className="auther_contacts">
                <section className="legal_info">
                    <div className="Location_section">
                        <span className="loction_img">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <p>
                            Lorem ipsum dolor sit.
                        </p>
                    </div>
                    <div className="Location_section">
                        <span className="loction_img">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <p>
                            walidcode0@gmail.com
                        </p>
                    </div>
                    <div className="Location_section">
                        <span className="loction_img">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <p>
                            +112 06 35 22 53 61
                        </p>
                    </div>
                </section>
                <section className="media_contact">
                    <span className="icon_media">
                        <FontAwesomeIcon icon={faFacebook} />
                    </span>
                    <span className="icon_media">
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                    <span className="icon_media">
                        <FontAwesomeIcon icon={faSnapchat} />
                    </span>
                    <span className="icon_media">
                        <FontAwesomeIcon icon={faYoutube} />
                    </span>
                </section>
            </div>
            <ContactComponent />
        </div>
    )
}

export default ContactPage;