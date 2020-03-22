import React, { Fragment } from "react";
import "./Sidebar.scss";

//components
import Country from "../Country/Country";

//redux
import { connect } from "react-redux";
import WorldData from "../WorldData/WorldData";

const Sidebar = ({ summary }) => {
  return (
    <div className="sidebar">
      <h1 className="title">COVID-19 Tracker</h1>
      {summary ? (
        <Fragment>
          <WorldData />
          <div className="data-summary">
            {summary.map(({ country_code, ...rest }) => (
              <Country key={country_code} {...rest} />
            ))}
          </div>
        </Fragment>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  summary: state.data.summary
});

export default connect(mapStateToProps)(Sidebar);
