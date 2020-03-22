import React, { useState } from "react";
import "./Country.scss";

//components
import DataContainer from "../DataContainer/DataContainer";

//redux
import { connect } from "react-redux";

const Country = ({ country, latest }) => {
  const [isHidden, setIsHidden] = useState(true);

  const clickCountry = () => {
    setIsHidden(!isHidden);
  };

  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="country-data" onClick={clickCountry}>
      <div className="button">
        <div className="country-name">{country}</div>
        <div className="confirmed">{numberWithCommas(latest.confirmed)}</div>
      </div>

      {!isHidden ? (
        <div className="country-summary">
          <DataContainer
            children="Active Cases"
            data={numberWithCommas(
              latest.confirmed - (latest.deaths + latest.recovered)
            )}
            color="#AD7FF6"
          />
          <DataContainer
            children="Fatal Cases"
            data={numberWithCommas(latest.deaths)}
            color="#EE7587"
          />
          <DataContainer
            children="Recovered Cases"
            data={numberWithCommas(latest.recovered)}
            color="#58C9CC"
          />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  summary: state.data.summary
});

export default connect(mapStateToProps)(Country);
