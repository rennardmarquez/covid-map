import React from "react";
import "./Countries.scss";

//redux
import { connect } from "react-redux";

const Countries = ({ locations }) => (
  <div className="countries">
    {locations ? (
      locations.map(location => (
        <div key={location.id} className="location">
          <h1>{location.country}</h1>
          <p>{location.latest.confirmed}</p>
        </div>
      ))
    ) : (
      <div>Loading</div>
    )}
  </div>
);

const mapStateToProps = state => ({
  locations: state.data.locations
});

export default connect(mapStateToProps)(Countries);
