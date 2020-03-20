import React from "react";
import mapboxgl from "mapbox-gl";

import "./Map.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmVubmFyZG1hcnF1ZXoiLCJhIjoiY2s3eXRleng3MDlnYTNscjJ4ZGw0amNwNCJ9.VMLvL1EpcOZduYwXGZNmwQ";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div ref={el => (this.mapContainer = el)} className="map-container" />
    );
  }
}

export default Map;
