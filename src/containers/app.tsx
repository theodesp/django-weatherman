import * as React from "react";
import CityWeatherInfo from "../components/city-weather-info";
import {WeatherData} from "../interfaces/weather-data";
const Geosuggest = require("react-geosuggest").default;
require("./app.less");

interface Props {
    api: any;
}

interface State {
    weatherData?: WeatherData;
}

export default class App extends React.Component<Props, State> {
    private request: PromiseLike<any>;

    constructor(props) {
        super(props);

        this.state = {
            weatherData: undefined
        }
    }   

    componentWillUnmount = () => {
        (this.request as any).reject();
    }

     /**
   * When a suggest city got selected
   * @param  {Object} suggest The suggest
   */
    private onSuggestSelected = (suggest) => {
        const gmaps = suggest.gmaps;
        
        // Format is "Athens, GA, USA"
        const cityName = gmaps.formatted_address
            .split(", ")
            .map(i => i.trim())
            .slice(0,2)
            .join("_");

        this.request = this.props.api.fetchWeatherData(cityName).then((data) => {
            this.setState({
                weatherData: data
            });
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Weatherman</h1>
                <div className="row">
                    <h2 className="subheader">Show weather in your city</h2>
                </div>
                <Geosuggest
                placeholder="Search city..."
                onSuggestSelect={(suggest) => this.onSuggestSelected(suggest)}
                types={["(cities)"]}/>
                {
                    this.state.weatherData &&
                    <CityWeatherInfo weatherData={this.state.weatherData} />
                }                
        </div>);
    }
}

