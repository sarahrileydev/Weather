import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position), //first call back or "success" call back, gets called when everything goes as planned
    (err) => console.log(err)
  )
  return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
