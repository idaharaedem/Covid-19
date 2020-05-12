import React from 'react';
import {Card, CardContent,Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup';

import './cards.styles.scss';


const Cards = ({data: {confirmed, recovered, lastUpdate, deaths}}) => {

     if(!confirmed){
         return 'Loading'
     }
    
     return (
        <div className="container">
            <Grid container spacing={3} justify='center'>
                <Card className="card infected">
                    <CardContent>
                        <Typography className="I-bottom" color='textSecondary' gutterBottom>Infected People</Typography>
                        <Typography variant='h4' gutterBottom> 
                            <CountUp start= {0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active Covid-19 patients </Typography>
                    </CardContent>
                </Card>

                <Card className=" card recovered">
                    <CardContent>
                        <Typography className="R-bottom" color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h4' gutterBottom> 
                            <CountUp start= {0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recovered Covid-19 patients </Typography>
                    </CardContent>
                </Card>

                <Card className=" card deaths">
                    <CardContent>
                        <Typography className="D-bottom" color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h4' gutterBottom> 
                            <CountUp start= {0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of deaths caused by Covid-19 </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}
/* 
const mapStateToProps = state => ({
    cards: state.cards.data
}) */

export default Cards;