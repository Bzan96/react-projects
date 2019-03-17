import React from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnkh, faBars } from '@fortawesome/free-solid-svg-icons'

// To force window refresh on clicking a link:
// <Link to="/Rome" onClick={() => window.location.refresh()}>Rome</Link>
// There HAS TO be a better way, right? Or perhaps it's just because I insist on
// having these <Link>s in a separate file...

library.add(faAnkh)
library.add(faBars)

function Header() {
    return(
        <header>
            <h1><Link to="/" onClick={() => window.location.refresh()}>Amazing Travel Destinations</Link></h1>
            <p>Fulfill your dream vacation at one of our awesome destinations</p>
            <div id="dropdown">
                <FontAwesomeIcon icon="ankh" className="menu-icons" />
                <FontAwesomeIcon icon="bars" className="menu-icons" />
                <FontAwesomeIcon icon="ankh" className="menu-icons" />
 
                <nav id="navigation">
                    <Link to="/Rome" onClick={() => window.location.refresh()}>Rome</Link>
                    <Link to="/Paris" onClick={() => window.location.refresh()}>Paris</Link>
                    <Link to="/Berlin" onClick={() => window.location.refresh()}>Berlin</Link>
                    <Link to="/London" onClick={() => window.location.refresh()}>London</Link>
                    <Link to="/Athens" onClick={() => window.location.refresh()}>Athens</Link>
                    <Link to="/Madrid" onClick={() => window.location.refresh()}>Madrid</Link>
                    <Link to="/Lisbon" onClick={() => window.location.refresh()}>Lisbon</Link>
                    <Link to="/NewYork" onClick={() => window.location.refresh()}>NewYork</Link>
                    <Link to="/Ottawa" onClick={() => window.location.refresh()}>Ottawa</Link>
                    <Link to="/Stockholm" onClick={() => window.location.refresh()}>Stockholm</Link>
                    <Link to="/Helsinki" onClick={() => window.location.refresh()}>Helsinki</Link>
                    <Link to="/Oslo" onClick={() => window.location.refresh()}>Oslo</Link>
                    <Link to="/Copenhagen" onClick={() => window.location.refresh()}>Copenhagen</Link>
                    <Link to="/Riga" onClick={() => window.location.refresh()}>Riga</Link>
                    <Link to="/Tallin" onClick={() => window.location.refresh()}>Tallin</Link>
                    <Link to="/Vilnius" onClick={() => window.location.refresh()}>Vilnius</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;