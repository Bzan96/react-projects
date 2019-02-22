import React from "react";
import MemeGenerator from "./MemeGenerator";
import Header from "./Header";
import Footer from "./Footer";

class Meme extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="container">
                    <MemeGenerator />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Meme;