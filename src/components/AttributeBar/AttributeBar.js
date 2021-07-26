import React from "react";
import "./AttributeBar.css";

const AttributeBar = ({ imgSrc, attribBase, attribGain, alt }) => {
  return (
    <div>
      <img src={imgSrc} className="attribute-icon" alt={alt} /> {attribBase} +{" "}
      {attribGain}
    </div>
  );
};

export default AttributeBar;
