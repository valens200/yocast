import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

function BarChart() {
    const labels = ["January", "February", "March", "April", "May", "June", "July", "Augast", "September", "October", "November", "December"];
    const data = {
        labels: labels,
        datasets: [
          
            {
                label: "Podcasts",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30],
            },
            {
                label: "Subscriptions",
                backgroundColor: "rgb(54, 162, 235)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30],
            },
            {
                label: "Reviews",
                backgroundColor: "rgb(255, 205, 86)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30],
            }
        ]
    }
    return (
        <div id='barChart' className='w-[100%]   h-[100%]'>
            <Bar data={data} />
        </div>
    )
}

export default BarChart