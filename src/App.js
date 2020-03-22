import React, { useEffect } from "react";
import "./App.scss";

//components
import Sidebar from "./components/Sidebar/Sidebar";
import Map from "./components/Map/Map";

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
      <Sidebar />
      <Map />
    </div>
  );
};

export default connect(null, { getLocations, getWorldData })(App);
