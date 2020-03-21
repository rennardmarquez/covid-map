import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./Map.scss";

//redux
import { connect } from "react-redux";

const Map = ({ locations }) => {
  const [viewport, setViewport] = useState({
    latitude: 38,
    longitude: 55,
    width: "100%",
    height: "100%",
    zoom: 2,
    minZoom: 2
  });

  const markerSize = data => {
    return data >= 50000
      ? 50
      : data < 50000 && data >= 10000
      ? 32
      : data < 10000 && data >= 1000
      ? 24
      : data < 1000 && data >= 100
      ? 16
      : 9;
  };

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/rennardmarquez/ck81nw9p023bx1itcaon4vkoh"
        onViewportChange={viewport => setViewport(viewport)}
      >
        {locations
          ? locations.map(location =>
              location.latest.confirmed ? (
                <Marker
                  key={location.id}
                  latitude={Number(location.coordinates.latitude)}
                  longitude={Number(location.coordinates.longitude)}
                >
                  <div
                    className="circle"
                    style={{
                      height: `${markerSize(location.latest.confirmed)}px`,
                      width: `${markerSize(location.latest.confirmed)}px`
                    }}
                  ></div>
                </Marker>
              ) : null
            )
          : null}
      </ReactMapGL>
    </div>
  );
};

const mapStateToProps = state => ({
  locations: state.data.locations
});

export default connect(mapStateToProps)(Map);
