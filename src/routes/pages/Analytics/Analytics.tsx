import React, { useEffect, useState } from 'react'
import type { ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import useProducts from '../../../hooks/useProducts'

const Analytics = () => {
  const { products } = useProducts()
  const [chartData, setChartData] = useState<ChartData>({} as ChartData)

  useEffect(() => {
    if (products) {
      setChartData({
        labels: products.map((product) => product.name),
        datasets: [
          {
            label: 'Subscribers',
            data: products.map((product) => product.monthlySubs),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          },
        ],
      })
    }
  }, [])

  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Monthly subscribers',
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          },
        }}
      />
    </div>
  )
}

export default Analytics
