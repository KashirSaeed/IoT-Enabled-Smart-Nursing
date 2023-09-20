import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';
import Loading from "../LoadingComponent/loading";

function BarGraph({ activityNames, activityFrequency }) {
  console.log("activityNames")
  console.log(activityNames)

  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    if (activityFrequency && activityFrequency.length > 0){
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
          colors: ['#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
            '#f48024', '#69d2e7'
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

  if (!chartData) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }} >
        <div ><Loading/></div>
      </div>
    );
  }

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={380} />
    </div>
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<BarGraph />, domContainer);

export default BarGraph;
