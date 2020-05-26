import React from 'react';
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const DataGrab =  async (country) => {
    let adaptiveUrl = url

    if(country) {
        adaptiveUrl = `${url}/countries/${country}`
    }
    
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios(adaptiveUrl); 
        const modifiedData ={confirmed,recovered,deaths,lastUpdate};
        return modifiedData;
    
    } catch (error) {
        console.log(error)
    }
}


export const DailyData = async() => {
    try {

        const {data} = await axios(`${url}/daily`);

        
        
        const modData = data.map((dayData) => ({
            confirmed: dayData.confirmed.total,
            deaths: dayData.deaths.total,
            date: dayData.reportDate
        }))

        return modData;
        
    } catch (error) {
        console.log(error);
    }
}

export const CountrySelector = async() => {
    try {
        
        const {data: {countries}} = await axios(`${url}/countries`);
        
        const modData = countries.map(country => country.name)
        return modData;

    } catch (error) {
        console.log(error)
    }
}

export const WorldHealth = async() => {
    const url = 'https://www.who.int/feeds/entity/hac/en/rss.xml';

}