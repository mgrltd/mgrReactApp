import React from "react";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
  LineSeries,
  PieSeries
} from '@devexpress/dx-react-chart-material-ui';
  
const Charts = () => {
  
// Sample data
const data = [
  { argument: 'Monday', value: 30 },
  { argument: 'Tuesday', value: 20 },
  { argument: 'Wednesday', value: 10 },
  { argument: 'Thursday', value: 50 },
  { argument: 'Friday', value: 6 },
  { argument: 'Mondy', value: 30 },
  { argument: 'Tuesdy', value: 20 },
  { argument: 'Wedesday', value: 10 },
  { argument: 'Thurday', value: 50 },
  { argument: 'Frday', value: 60 },
  { argument: 'May', value: 30 },
  { argument: 'Tday', value: 20 },
  { argument: 'Wesday', value: 10 },
  { argument: 'Thuay', value: 50 },
  { argument: 'Fday', value: 60 },
];
return (
  
    <Chart  data={data}  >
      <ArgumentAxis  />
      <ValueAxis />
      {/* <PieSeries valueField="value" argumentField="argument" /> */}
      <BarSeries valueField="value" argumentField="argument" />

    </Chart>

);
}
  
export default Charts;
  

//       **install**
// npm i --save @devexpress/dx-react-core @devexpress/dx-react-chart
// npm i --save @devexpress/dx-react-chart-material-ui
