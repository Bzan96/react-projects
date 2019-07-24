import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }

    render() {
        let { data } = this.state;

        return (
            <Bar
                data={data}
                options={{
                    title: "BarChart Through React!",
                    scales:{
                        xAxes: [{
                            barPercentage: 0.5,
                            barThickness: 6,
                            maxBarThickness: 8,
                            minBarLength: 2,
                            gridLines: {
                                offsetGridLines: true
                            }
                        }]
                    }
                }}
            />
        )
    }
}

export default BarChart;