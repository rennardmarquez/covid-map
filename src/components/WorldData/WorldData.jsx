import React from "react";
import "./WorldData.scss";

//component
import DataContainer from "../DataContainer/DataContainer";

//redux
import { connect } from "react-redux";

const WorldData = ({ worldData }) => {
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return worldData ? (
    <div className="world-data">
      <div className="total-container">
        <div className="label">TOTAL CONFIRMED CASES</div>
        <div className="total">{numberWithCommas(worldData.confirmed)}</div>
      </div>

      <DataContainer
        children="Active Cases"
        data={numberWithCommas(
          worldData.confirmed - (worldData.deaths + worldData.recovered)
        )}
        color="#AD7FF6"
      />
      <DataContainer
        children="Fatal Cases"
        data={numberWithCommas(worldData.deaths)}
        color="#EE7587"
      />
      <DataContainer
        children="Recovered Cases"
        data={numberWithCommas(worldData.recovered)}
        color="#58C9CC"
      />
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  worldData: state.data.worldData
});

export default connect(mapStateToProps)(WorldData);
