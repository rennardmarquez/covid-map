import React from "react";
import "./CustomPopup.scss";

//components
import DataContainer from "../DataContainer/DataContainer";

//utils
import numberWithCommas from "../../utils/numberWithCommas";

const Popup = ({ location }) => (
  <div className="popup">
    <div className="popup-heading">
      <div className="country">{location.country}</div>
      {location.province ? (
        <div className="province">{location.province}</div>
      ) : null}
    </div>
    <DataContainer
      children="Active"
      data={numberWithCommas(
        location.latest.confirmed -
          (location.latest.deaths + location.latest.recovered)
      )}
      color="#AD7FF6"
    />
    <DataContainer
      children="Deaths"
      data={numberWithCommas(location.latest.deaths)}
      color="#EE7587"
    />
    <DataContainer
      children="Recovered"
      data={numberWithCommas(location.latest.recovered)}
      color="#58C9CC"
    />
  </div>
);

export default Popup;
