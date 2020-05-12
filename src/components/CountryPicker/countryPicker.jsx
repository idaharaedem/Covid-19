import React, {useState, useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'
import {CountrySelector} from '../APICalls/index'

import './countryPicker.styles.scss'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);


    useEffect(() => {
        const countrySelector = async() => {
            const country = await CountrySelector();
            setFetchedCountries(country);
        }

        countrySelector();
    }, [setFetchedCountries]);

    
    return(
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(event)=> handleCountryChange(event.target.value)}>
                <option value = ""> Global </option>
                {fetchedCountries.map((countries, index) =>
                <option key={index} value = {countries}> {countries} </option>
                )}
                
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;