import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./Map.scss";

//components
import CustomPopup from "../CustomPopup/CustomPopup";

//utils
import markerSize from "../../utils/markerSize";

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

  const [selected, setSelected] = useState(null);

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/rennardmarquez/ck836nbuy1a3r1iq72dzi9w1b"
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
                    onClick={e => {
                      e.preventDefault();
                      setSelected(location);
                    }}
                  ></div>
                </Marker>
              ) : null
            )
          : null}
        {selected ? (
          <Popup
            latitude={Number(selected.coordinates.latitude)}
            longitude={Number(selected.coordinates.longitude)}
            closeButton={false}
            closeOnClick={true}
          >
            <CustomPopup location={selected} />
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

const mapStateToProps = state => ({
  locations: state.data.locations
});

export default connect(mapStateToProps)(Map);
