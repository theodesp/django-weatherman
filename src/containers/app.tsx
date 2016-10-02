import * as React from "react";
const Geosuggest = require("react-geosuggest").default;
require("./app.less");


export default class App extends React.Component<{}, {}> {

    /**
   * When a suggest city got selected
   * @param  {Object} suggest The suggest
   */
    private onSuggestSelect = (suggest) => {
        console.log(suggest);
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
                onSuggestSelect={this.onSuggestSelect}
                types={["(cities)"]}/>
        </div>);
    }
}
