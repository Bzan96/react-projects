import React from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

import London from "./destinations/London";
import TowerOfLondon from "./destinations/TowerOfLondon";
import Rome from "./destinations/Rome";
import RomeHistoricCentre from "./destinations/RomeHistoricCentre";
import Helsinki from "./destinations/Helsinki";
import Stockholm from "./destinations/Stockholm";
import Birka from "./destinations/Birka";
import Oslo from "./destinations/Oslo";
import Athens from "./destinations/Athens";
import Acropolis from "./destinations/Acropolis";
import Berlin from "./destinations/Berlin";
import MuseumsInsel from "./destinations/MuseumsInsel";
import NewYork from "./destinations/NewYork";
import StatueOfLiberty from "./destinations/StatueOfLiberty";
import Ottawa from "./destinations/Ottawa";
import RideauCanal from "./destinations/RideauCanal";
import Copenhagen from "./destinations/Copenhagen";
import Paris from "./destinations/Paris";
import Seine from "./destinations/Seine";
import Tallin from "./destinations/Tallin";
import TallinOldTown from "./destinations/TallinOldTown";
import Riga from "./destinations/Riga";
import RigaHistoricCentre from "./destinations/RigaHistoricCentre";
import Vilnius from "./destinations/Vilnius";
import VilniusOldTown from "./destinations/VilniusOldTown";
import Madrid from "./destinations/Madrid";
import Escurial from "./destinations/Escurial";
import Lisbon from "./destinations/Lisbon";
import TowerOfBelem from "./destinations/TowerOfBelem";

/*
    Note: This file is incredibly messy with all the links
    There is a better way of solving this by having another
    file name eg. "routes" where all routes are stored in
    an array, but I'll save learning that for another project.
    See https://blog.bitsrc.io/must-know-concepts-of-react-router-fb9c8cc3c12
    for a guide of how to do that.

    However, I think this component still follows React conventions
    since it only does one thing - handles routing.
*/

class Container extends React.Component{
    render() {
        return(
            <div>
                {/* Add links in header to each page */}
                <Router>
                    <Header />
                </Router>
                
                <Router>
                    <Switch>
                        <Route exact path="/" component={Form} />
                        <Route path="/london" component={withRouter(London)} />
                        <Route path="/toweroflondon" component={withRouter(TowerOfLondon)} />
                        
                        <Route path="/rome" component={withRouter(Rome)} />
                        <Route path="/romehistoriccentre" component={withRouter(RomeHistoricCentre)} />

                        <Route path="/paris" component={withRouter(Paris)} />
                        <Route path="/seine" component={withRouter(Seine)} />

                        <Route path="/helsinki" component={withRouter(Helsinki)} />

                        <Route path="/stockholm" component={withRouter(Stockholm)} />
                        <Route path="/birka" component={withRouter(Birka)} />

                        <Route path="/oslo" component={withRouter(Oslo)} />

                        <Route path="/copenhagen" component={withRouter(Copenhagen)} />

                        <Route path="/athens" component={withRouter(Athens)} />
                        <Route path="/acropolis" component={withRouter(Acropolis)} />

                        <Route path="/berlin" component={withRouter(Berlin)} />
                        <Route path="/museumsinsel" component={withRouter(MuseumsInsel)} />

                        <Route path="/newyork" component={withRouter(NewYork)} />
                        <Route path="/statueofliberty" component={withRouter(StatueOfLiberty)} />

                        <Route path="/ottawa" component={withRouter(Ottawa)} />
                        <Route path="/rideaucanal" component={withRouter(RideauCanal)} />

                        <Route path="/tallin" component={withRouter(Tallin)} />
                        <Route path="/tallinoldtown" component={withRouter(TallinOldTown)} />

                        <Route path="/riga" component={withRouter(Riga)} />
                        <Route path="/rigahistoriccentre" component={withRouter(RigaHistoricCentre)} />

                        <Route path="/vilnius" component={withRouter(Vilnius)} />
                        <Route path="/vilniusoldtown" component={withRouter(VilniusOldTown)} />

                        <Route path="/madrid" component={withRouter(Madrid)} />
                        <Route path="/escurial" component={withRouter(Escurial)} />

                        <Route path="/lisbon" component={withRouter(Lisbon)} />
                        <Route path="/towerofbelem" component={withRouter(TowerOfBelem)} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default Container;