import React from "react";
import "./Country.scss";

//redux
import { connect } from "react-redux";

const Country = ({ country, latest }) => (
  <div className="country">
    <span>{country}</span>
    <p>confirmed: {latest.confirmed}</p>
    <p>deaths: {latest.deaths}</p>
    <p>recovered: {latest.recovered}</p>
  </div>
);

const mapStateToProps = state => ({
  summary: state.data.summary
});

export default connect(mapStateToProps)(Country);
