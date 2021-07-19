import React, { useState, useEffect } from "react";
import openDOTA from "../../services/api";

const HeroesContainer = () => {
  const [viewType, setViewType] = useState("grid");
  const [heroesList, setHeroesList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    openDOTA
      .get("/heroes")
      .then((response) => {
        if (response.data.length > 0) {
          setHeroesList(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  return <div>{viewType}</div>;
};

export default HeroesContainer;
