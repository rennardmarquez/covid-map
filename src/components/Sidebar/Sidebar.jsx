import React from "react";
import "./Sidebar.scss";

//components
import Country from "../Country/Country";

//redux
import { connect } from "react-redux";

const Sidebar = ({ summary }) => {
  return (
    <div className="sidebar">
      <h1>COVID-19 Tracker</h1>
      <div className="data-summary">
        {summary ? (
          summary.map(({ country_code, ...rest }) => (
            <Country key={country_code} {...rest} />
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  summary: state.data.summary
});

export default connect(mapStateToProps)(Sidebar);
