import React from "react";
import "./CustomMarker.scss";

const CustomMarker = () => (
  <svg
    id="svgelem"
    height="100"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <circle
      cx="50"
      cy="50"
      r="5px"
      stroke="hotpink"
      strokeWidth="2"
      fill="hotpink"
      fillOpacity={0.5}
    />
  </svg>
);

export default CustomMarker;
