import React from 'react';
//created Form function so that user can enter input for City and Country Code.
// the getWeather function will grab the inputs in order to retrieve data from API.
const Form = props => 
    (
            <form onSubmit={props.getWeather}>
                <input className="inputs" type="text" name="city" placeholder="City..."/>
                <input className="inputs" type="text" name="country" placeholder="Country..."/>
                <button>Get Weather!</button>
                <input type="Reset"  value="Reset"  />
                
            </form>

            
        );

export default Form;