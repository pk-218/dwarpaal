import React from 'react'
import { Pie } from "react-chartjs-2";
import { chartColours } from "./colours";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const PieChart = ({ labels, data }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <>
            <Pie
                data={{
                    labels: labels,
                    maintainAspectRatio: false,
                    responsive: true,
                    datasets: [
                        {
                            data: data,
                            backgroundColor: chartColours,
                            hoverBackgroundColor: chartColours,
                        },
                    ],
                }}
                options={{
                    legend: {
                        display: false,
                        position: "right",
                    },
                    elements: {
                        arc: {
                            borderWidth: 0,
                        },
                    },
                }}
            />

        </>
    )
}

export default PieChart