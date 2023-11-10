import React, { useMemo, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const colorsArray = Array.from({ length: 10 }, () => [
  Math.floor(Math.random() * 256),
  Math.floor(Math.random() * 256),
  Math.floor(Math.random() * 256)
]);

export function Graph(props) {
  const [Mylabels, setLabels] = useState(props.labelsArray)
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  let dateObj;
  const data = useMemo(() => {
    return {
      labels: props.dataPlots.map((element) => {
        dateObj = new Date(element['time']);
        // console.log(dateObj.toLocaleTimeString());
        return dateObj.toLocaleTimeString();
      }),
      datasets: Mylabels.map((measurement, index) => {

        return {
          label: measurement.label,
          data: props.dataPlots.map((element) => element[measurement.id]),
          borderColor: `rgb(${colorsArray[index][0]},${colorsArray[index][1]},${colorsArray[index][2]})`,
          backgroundColor: `rgba(${colorsArray[index][0]},${colorsArray[index][1]},${colorsArray[index][2]},0.5)`
        }
      })
    }
  }, [Mylabels,props.dataPlots]);
  const handleCheck = (event) => {
    let temparray = [];
    temparray = props.labelsArray.filter((measurement)=>{
      let e = document.getElementById(measurement.label)
        return e.checked
    })
    setLabels(temparray)
  }
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <Grid container alignItems={'center'}>
        <Grid item>
          <TextField id="outlined-basic" label="# of Records" variant="outlined" sx={{ paddingRight: '5px' }} value={props.records} onChange={props.recordsHandler} type='number' />
        </Grid>
        {props.labelsArray.map((measurement) => {
          return (
            <Grid key={measurement.id} item>
              <FormControlLabel control={<Checkbox onChange={handleCheck} value={measurement.id} id={measurement.label} defaultChecked />} label={measurement.label} />
            </Grid>)
        })}

      </Grid>

      <Line options={options} data={data} />
    </div>
  );
}

Graph.propTypes = {
  labelsArray: PropTypes.array.isRequired,
  dataPlots: PropTypes.array.isRequired,
  records: PropTypes.number.isRequired,
  recordsHandler: PropTypes.func.isRequired

}
