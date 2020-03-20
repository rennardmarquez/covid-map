import React, { useEffect } from "react";
import "./App.css";

//components
import Countries from "./components/Countries/Countries";

//redux
import { connect } from "react-redux";
import { getLocations, getWorldData } from "./actions/data";

const App = ({ getLocations, getWorldData }) => {
  useEffect(() => {
    getWorldData();
    getLocations();
  });

  return (
    <div className="App">
      <Countries />
    </div>
  );
};

export default connect(null, { getLocations, getWorldData })(App);
