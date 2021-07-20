import React from "react";
import "./GridView.css";

const GridView = ({ heroesList }) => {
  return (
    <>
      {heroesList.map((hero) => (
        <article
          className={`hero-container ${hero.primary_attr}`}
          key={hero.id}
        >
          {/* <img src={} alt={} /> */}
          <p>{hero.localized_name}</p>
          <p>{hero.attack_type}</p>
          <p>
            {hero.roles.map((role, index) => (
              <span id={index} className={role}>
                {role}{" "}
              </span>
            ))}
          </p>
        </article>
      ))}
    </>
  );
};

export default GridView;
