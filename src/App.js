import React from 'react';
import {Cards, Chart, CountryPicker, Header} from './components';
import {DataGrab} from './components/APICalls'
import {connect} from 'react-redux';
import {setCards} from './redux/cards/cards.action'; 

import './App.Styles.scss';

class App extends React.Component {

    state = {
        data: {},
        countries: '',
    }

    handleCountryChange = async (country) => {
        //fetch corresponding data
        const fetchedData = await DataGrab(country);
        //set corresponding state
        this.setState({
            data: fetchedData,
            countries: country
        })
    }

    async componentDidMount () {
        const fetchedData = await DataGrab();
        this.setState({data: fetchedData});
    }

    render(){
        return (
            <div className="container">
                <Header/>
               <Cards data={this.state.data}/>
               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Chart data={this.state.data} countries={this.state.countries}/>
            </div>
        )
    }
}

/* const mapDispatchToProps = dispatch => ({
    setCards: cards => dispatch(setCards(cards))
}) */

export default App;