import React, { Component } from "react";
import BarChart from "./BarChart";

class Chart extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            data: {}
        }
    }

    async componentDidMount() {
        await fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
            .then(res => res.json() )
            .then(data => {
                const labels = data.data.map((d) => d[0]);
                const dataset = data.data.map((d) => d[1]);
                
                this.setState({
                    data: {
                        datasets: [{
                            label: "Federal Reserve Economic Data",
                            data: dataset,
                            backgroundColor: "purple"
                        }],
                        labels: labels
                    },
                    loading: false
                })
            })
    }


    render() {
        let { loading, data } = this.state;

        return (
            <div>
            { loading ? "" : 
            <BarChart
                data={data}
            />
            }
            </div>
        )
    }
}

export default Chart;