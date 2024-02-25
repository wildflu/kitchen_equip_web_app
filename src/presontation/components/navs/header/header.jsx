
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeRoute, setActiveRoute] = useState(0)

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

    return(
        <header className="header_nav" style={{boxShadow: scrolled?"1px 1px 5px #555":"none"}}>
            <label className="logo">Kitchen Equips</label>
            <nav className="header_routes">
                <Link onClick={()=> setActiveRoute(0)} className="header_link" to="/">Home <span className={activeRoute ===0?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(1)} className="header_link" to="/">Products <span className={activeRoute ===1?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(2)} className="header_link" to="/">About <span className={activeRoute ===2?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(3)} className="header_link" to="/">Faq <span className={activeRoute ===3?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(4)} className="header_link" to="/">News <span className={activeRoute ===4?"notifier_route":"active_route"}></span></Link>
                <Link onClick={()=> setActiveRoute(5)} className="header_link" to="/">Contact <span className={activeRoute ===5?"notifier_route":"active_route"}></span></Link>
            </nav>
        </header>
    )
}

export default Header;