import React from 'react';
//created Weather function so that the weather categories will show up in a div
//once user enters all the required inputs. 
//this will display info from API call as well as error if user does not enter anything inside the input.
const Weather = props => (
   <div className="weather__info">
         
            
            {props.City && props.Country && <p>Location: {props.City}, {props.Country}</p>}
            {props.Temperature && <p>Temperature: {props.Temperature}°F</p>}
            {props.Humidity && <p>Humidity: {props.Humidity}%</p>}
            {props.Description && <p>Conditions: {props.Description}</p>}
            {props.Error && <p>{props.Error}</p>}
           
            </div>

    );

      
   
    


export default Weather;