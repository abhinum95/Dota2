import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import openDOTA from "../../services/heroes";
import { extractData } from "../../helper/helper";
import GridView from "../GridView/GridView";
import SearchBar from "../SearchBar/SearchBar";

const HeroesContainer = () => {
  // const [viewType, setViewType] = useState("grid");
  // const [heroesList, setHeroesList] = useState([]);
  const heroesList = useSelector((state) => state.heroesList);
  console.log(heroesList);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchHeroStats();
  }, []);

  const fetchHeroStats = async () => {
    let result;
    await openDOTA
      .get("/heroStats")
      .then((response) => {
        result = response.data.map((heroDetails) => extractData(heroDetails));
        dispatch({
          type: "FETCH_DATA",
          payload: result,
        });
        console.log(heroesList);
        // setHeroesList(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="heroesContainer">
      <SearchBar />
      <GridView heroesList={heroesList} />
    </div>
  );
};

export default HeroesContainer;
