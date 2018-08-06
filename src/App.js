import React from 'react';
import Titles from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
import Video from './Components/Video';

const API_KEY = 'd5584e8a3f21310e9190ee1abcc4a5ec';

class App extends React.Component {
  //set state for each of the catogories
  state = {
    Temperature: undefined,
    City: undefined,
    Country: undefined,
    Humidity: undefined,
    Description: undefined,
    Error: undefined
  }
  //created function to get weather from API, pulling from input form the city and country code.
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_CALL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await API_CALL.json();
    if(city && country) {
    //gets the data from API in the object array.
    this.setState({
      Temperature: data.main.temp,
      City: data.name,
      Country: data.sys.country,
      Humidity: data.main.humidity,
      Description: data.weather[0].description,
      Error: ""
    });
   } else {
    this.setState({
      Temperature: undefined,
      City: undefined,
      Country: undefined,
      Humidity: undefined,
      Description: undefined,
      Error: "Error! You must enter City and Country!"
    });
   }

  }
  //rendering components to index.html as well using react-bootstrap to stylize index page.
  render() {
    return (
  <div>
    <div className="wrapper">
        <Video />
      <div className="main">
        <div className="container">
              <div className="row">
      <div className="col-xs-6 title-container">
      <Titles />
      </div>
      <div className="col-xs-6 form-container">
      <Form getWeather={this.getWeather}
       
      />
      <Weather 
      Temperature={this.state.Temperature} 
        City={this.state.City}
        Country={this.state.Country}
        Humidity={this.state.Humidity}
        Description={this.state.Description}
        Error={this.state.Error}
       

      />
      
        </div>
          </div>
        </div>
      </div>
  </div>
</div>
    );
  }
};

export default App;