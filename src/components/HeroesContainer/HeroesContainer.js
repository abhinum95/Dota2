import React, { useState, useEffect } from "react";
import openDOTA from "../../axios/axios";
import { extractData } from "../../helper/helper";
import GridView from "../GridView/GridView";

const HeroesContainer = () => {
  const [viewType, setViewType] = useState("grid");
  const [heroesList, setHeroesList] = useState([]);
  useEffect(() => {
    fetchHeroStats();
  }, []);

  const fetchHeroStats = async () => {
    let result;
    await openDOTA
      .get("/heroStats")
      .then((response) => {
        result = response.data.map((heroDetails) => extractData(heroDetails));
        setHeroesList(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="heroesContainer">
      <GridView heroesList={heroesList} />
    </div>
  );
};

export default HeroesContainer;
