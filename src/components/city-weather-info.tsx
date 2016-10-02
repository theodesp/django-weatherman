import * as React from "react";
import { WeatherData } from "../interfaces/weather-data";
const Table = require("react-bootstrap/lib/Table");
require("./city-weather-info.less");

interface Props {
    weatherData: WeatherData;
}

interface State { }

export default class CityWeatherInfo extends React.Component<Props, State> {

    constructor(props) {
        super(props);
    }

    render() {
        const {weatherData} = this.props;
        const currentData = weatherData.list[0];
        const currentTimeAt = new Date(currentData.dt * 1000).toString();
        return (
            <div className="city-weather-info">
            <h2> Weather in {weatherData.city.name}</h2>
                <h3> at {currentTimeAt} </h3>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Temp</th>
                            <th>Min</th>
                            <th>Max</th>
                            <th>Humidity</th>
                            <th>Pressure</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{currentData.main.temp} C</td>
                            <td>{currentData.main.temp_min} C</td>
                            <td>{currentData.main.temp_max} C</td>
                            <td>{currentData.main.humidity}%</td>
                            <td>{currentData.main.pressure} hPa</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
} 
