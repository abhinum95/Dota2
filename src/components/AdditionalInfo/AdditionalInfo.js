import React from "react";
import AttributeBar from "../AttributeBar/AttributeBar";
import { agiIconSrc, intIconSrc, strIconSrc } from "../../constants";
import "./AdditionalInfo.css";

const AdditionalInfo = ({
  baseStr,
  strGain,
  baseAgi,
  agiGain,
  baseInt,
  intGain,
}) => {
  return (
    <div className="additional-info">
      <AttributeBar
        imgSrc={strIconSrc}
        attribBase={baseStr}
        attribGain={strGain}
        alt="Strength Gain"
      />
      <AttributeBar
        imgSrc={agiIconSrc}
        attribBase={baseAgi}
        attribGain={agiGain}
        alt="Agility Gain"
      />
      <AttributeBar
        imgSrc={intIconSrc}
        attribBase={baseInt}
        attribGain={intGain}
        alt="Intelligence Gain"
      />
    </div>
  );
};

export default AdditionalInfo;
