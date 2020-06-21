
import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
class SalesData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lable:'',
            products:''
        }
    }
  render() {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          { 
            lables:'Intel',
            backgroundColor: 'rgba(251,97,97,1)',
            borderColor: 'rgba(251,97,97,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(251,97,97,1)',
            hoverBorderColor: 'rgba(251,97,97,1)',
            data: [ 3,4, 6, 8, 9, 5,8]
          },
          {
            backgroundColor: 'rgba(0,98,251,4)',
            borderColor: 'rgba(0,98,251,4)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,98,251,4)',
            hoverBorderColor: 'rgba(0,98,251,4)',
            data: [ 9,5, 3, 4, 2, 6,9]
          }
        ]
      };
      const pieData = {
        labels: [
            'AMD',
            'Intel',
        ],
        datasets: [{
            data: [300, 160],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    return (
      <div>
        <h2>Data analysis</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
        <br/>
        <Doughnut data={pieData} />
      </div>
    );
  }
};
export default SalesData