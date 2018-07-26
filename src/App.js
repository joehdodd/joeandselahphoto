import React, { Component } from "react";
import Hero from "./Hero";
import "./App.css";
import gc2 from "./assets/gc-2.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <Hero mainText="More Than Just Moments" img={gc2} />
      </div>
    );
  }
}

export default App;
