
import { Link } from "react-router-dom";
import kitchen from "../../../../assets/kitchen.svg";


function Footer(){
    return(
        <footer className="app_footer">
            <section className="footer_info">
                <div className="website_logo_name">
                    <img src={kitchen} alt="" />
                    <label>Kitchirino</label>
                </div>
                <div className="pages">
                    <Link className="footer_route"><span></span> Home</Link>
                    <Link className="footer_route"><span></span> Products</Link>
                    <Link className="footer_route"><span></span> Faq</Link>
                    <Link className="footer_route"><span></span> About</Link>
                    <Link className="footer_route"><span></span> News</Link>
                    <Link className="footer_route"><span></span> Contact</Link>
                </div>
                <div className="web_desctiption">
                    <h4>About Us</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil esse veniam.
                    </p>
                </div>
            </section>
            <section className="footer_cupy_right">
                <div className="the_line"></div>
                &copy; WildFlu | Created in 2024
            </section>
        </footer>
    )
}

export default Footer;