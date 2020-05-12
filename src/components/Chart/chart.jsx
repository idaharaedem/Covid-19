import React, {useState, useEffect} from 'react';
import {DailyData} from '../APICalls/index';
import {Line, Bar} from 'react-chartjs-2';
import './chart.styles.scss'

const Chart = ({data: {confirmed,recovered,deaths}, countries}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchApiData = async() =>  {
            const dailyDataObj = await DailyData();
            setDailyData(dailyDataObj);
        }

        fetchApiData();
    }, []);

    const lineChart =(
        dailyData.length !== 0
        ?
        (<Line
            data={{
             labels: dailyData.map(date => new Date(date.date).toDateString()),
             datasets: [{
                data: dailyData.map(conf => conf.confirmed),
                label: 'Infected',
                borderColor: '#3332ff',
                fill: true
             }, 
             {
                data: dailyData.map(death => death.deaths),
                label: 'Deaths',
                borderColor: 'rgba(185, 28, 28, 0.8)',
                fill: true
             }],   
            
            }}
        />)
        :
        <img src="../assets/spinner.gif" alt="spinner"/>
    );
 
    const BarChart = (
        confirmed
        ?
        (<Bar 
            data= {{
                labels: ['Infected','Recovered','Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(36, 36, 138, 0.6)','rgba(52, 224, 75, 0.6)','rgba(233, 36, 36, 0.6)'],
                    data: [confirmed.value, recovered.value, deaths.value],
                }]
                
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current state in ${countries}`}
            }}
           
        />
    
        ) 
        :
        <img src="../assets/spinner.gif" alt="spinner"/>
    );



    return (
        
        <div className="line-container">
           {
               
               countries
               ?
               BarChart
               :
               lineChart

               
           }
        </div>
)}



export default Chart;