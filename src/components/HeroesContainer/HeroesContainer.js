import React, { useState, useEffect } from "react";
import fetchHeroStats from "../../helper/fetchHeroes";
import GridView from "../GridView/GridView";

const HeroesContainer = () => {
  const [viewType, setViewType] = useState("grid");
  const [heroesList, setHeroesList] = useState([]);
  useEffect(() => {
    setHeroesList(fetchHeroStats());
    console.log(heroesList);
  }, []);

  return (
    <div>
      <GridView heroesList={heroesList} />
    </div>
  );
};

export default HeroesContainer;
