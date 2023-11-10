import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

function BarGraph({ activityNames, activityFrequency }) {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    if (activityFrequency && activityFrequency.length > 0) {
      setChartData({
        series: [{
          data: activityFrequency,
        }],
        options: {
          chart: {
            type: 'bar',
            height: 380
          },
          plotOptions: {
            bar: {
              barHeight: '100%',
              distributed: true,
              horizontal: false,
              dataLabels: {
                position: 'bottom'
              },
            }
          },
          colors: ['rgb(102, 204, 102)',  // Light Green  
            'rgb(153, 255, 153)',  // Lightest Green  
            'rgb(128, 128, 128)',  // Medium Grey  
            'rgb(179, 179, 179)',  // Light Grey  
            'rgb(76, 153, 76)',   // Dark Green  
            'rgb(204, 204, 204)',  // Lighter Grey  
            'rgb(51, 102, 51)'    // Darker Green]
          ],
          dataLabels: {
            enabled: false,
            textAnchor: 'start',
            style: {
              colors: ['#fff']
            },
            formatter: function (val, opt) {
              return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
            dropShadow: {
              enabled: true
            }
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: activityNames
          },
          yaxis: {
            labels: {
              show: true
            }
          },
          title: {
            text: 'Patient Activity Analysis',
            align: 'center',
            floating: true
          },
          subtitle: {
            text: 'Activity Detection Percentage',
            align: 'center',
          },
          tooltip: {
            theme: 'dark',
            x: {
              show: false
            },
            y: {
              title: {
                formatter: function () {
                  return ''
                }
              }
            }
          }
        },

      });
    }
  }, [activityFrequency]);

  if (chartData) {
    return (
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={380} />
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<BarGraph />, domContainer);
export default BarGraph;
