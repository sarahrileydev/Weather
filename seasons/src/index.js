import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude})
      }, //first call back or "success" call back, gets called when everything goes as planned
      err => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
