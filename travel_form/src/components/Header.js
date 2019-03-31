import React from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnkh, faBars } from '@fortawesome/free-solid-svg-icons'

// To force window reload on clicking a link:
// <Link to="/Rome" onClick={() => window.location.reload()}>Rome</Link>
// There HAS TO be a better way, right? Or perhaps it's just because I insist on
// having these <Link>s in a separate file...

library.add(faAnkh)
library.add(faBars)

function Header() {
    return(
        <header>
            <h1><Link to="/" onClick={() => window.location.reload()}>Amazing Travel Destinations</Link></h1>
            <p>Fulfill your dream vacation at one of our awesome destinations</p>
            <div id="dropdown">
                <FontAwesomeIcon icon="ankh" className="menu-icons" />
                <FontAwesomeIcon icon="bars" className="menu-icons" />
                <FontAwesomeIcon icon="ankh" className="menu-icons" />
 
                <nav id="navigation">
                    <Link to="/Rome" onClick={() => window.location.reload()}>Rome</Link>
                    <Link to="/Paris" onClick={() => window.location.reload()}>Paris</Link>
                    <Link to="/Berlin" onClick={() => window.location.reload()}>Berlin</Link>
                    <Link to="/London" onClick={() => window.location.reload()}>London</Link>
                    <Link to="/Athens" onClick={() => window.location.reload()}>Athens</Link>
                    <Link to="/Madrid" onClick={() => window.location.reload()}>Madrid</Link>
                    <Link to="/Lisbon" onClick={() => window.location.reload()}>Lisbon</Link>
                    <Link to="/NewYork" onClick={() => window.location.reload()}>NewYork</Link>
                    <Link to="/Ottawa" onClick={() => window.location.reload()}>Ottawa</Link>
                    <Link to="/Stockholm" onClick={() => window.location.reload()}>Stockholm</Link>
                    <Link to="/Helsinki" onClick={() => window.location.reload()}>Helsinki</Link>
                    <Link to="/Oslo" onClick={() => window.location.reload()}>Oslo</Link>
                    <Link to="/Copenhagen" onClick={() => window.location.reload()}>Copenhagen</Link>
                    <Link to="/Riga" onClick={() => window.location.reload()}>Riga</Link>
                    <Link to="/Tallin" onClick={() => window.location.reload()}>Tallin</Link>
                    <Link to="/Vilnius" onClick={() => window.location.reload()}>Vilnius</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;