
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Data from '../.././../../consts/data';

function Header() {

    const [activeRoute, setActiveRoute] = useState(0)
    const [scrolled, setScrolled] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    
    const bagItems = Data.MyBag.length;



    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);


    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const windowHeight = window.innerHeight;
            const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
            setScrollPercentage(scrollPercentage);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(
        <header className="header_nav" style={{boxShadow: scrolled?"1px 1px 5px #555":"none"}}>
            <label className="logo">Kitcheno <span style={{color: '#ab38d9', fontWeight:'300' }}>wildflu</span> </label>
            <nav className="header_routes">
                <Link onClick={()=> setActiveRoute(0)} className="header_link" to="/">Home <span className={activeRoute ===0?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(1)} className="header_link" to="/products">Products <span className={activeRoute ===1?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(2)} className="header_link" to="/reviews">Reviews <span className={activeRoute ===2?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(3)} className="header_link" to="/faq">Faq <span className={activeRoute ===3?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(4)} className="header_link" to="/contact">
                    Contact <span className={activeRoute ===4?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(5)} className="header_link" to="/mybag">
                    <span className="icon_bag" style={{color:activeRoute ===5 ?"#ab38d9":"#555"}}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="item_coint">{bagItems}</span>
                    </span>
                </Link>
            </nav>
            <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
        </header>
    )
}

export default Header;