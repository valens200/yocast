import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js'
Chart.register(CategoryScale);
function Doughnurt() {
  const labels = ["January", "February", "March"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Podcasts",
        data: [2, 20, 30],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      },
    ]

  }
  return (
    <div className='w-[70%] mx-auto h-[100%]'>
      <p className='text-center p-2 font-poppins font-sans'>Best selling podcasts </p>
      <Doughnut data={data} />
    </div>
  )
}

export default Doughnurt