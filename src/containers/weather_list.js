import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  constructor(props) {
    super(props);

  }

  renderWeather(cityData) {    // render weather for each city
    const { name } = cityData.city;
    const temps = cityData.list.map(weather => { return weather.main.temp; });
    const pressures = cityData.list.map(weather => { return weather.main.pressure; });
    const humidities = cityData.list.map(weather => { return weather.main.humidity; });

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="green"/></td>
        <td><Chart data={pressures} color="blue"/></td>
        <td><Chart data={humidities} color="brown"/></td>
      </tr>
    )
  }

  render() {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}


function mapStateToProps({ weather }) {
  return { weather };   // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
