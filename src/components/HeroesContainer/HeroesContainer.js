import React, { useState } from "react";

const HeroesContainer = () => {
  const [viewType, changeViewType] = useState("grid");

  return <div>{viewType}</div>;
};

export default HeroesContainer;
