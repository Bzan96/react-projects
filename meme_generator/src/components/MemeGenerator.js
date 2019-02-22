import React from "react";

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json() )
            .then(response => {
                const {memes} = response.data
                console.log(memes[5]);
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const imgNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[imgNum].url;
        this.setState({
            randImg: randMemeImg
        })
    }

    render() {
        return(
            <div>
                {/* Could also use onSubmit={this.handleSubmit} */}
                <form className="meme-form" >
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />

                    <button onClick={this.handleClick}>Generate new meme</button>
                </form>
                <div className="meme">
                    <img src={this.state.randImg} alt="" />
                    <h2 autofocus className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;