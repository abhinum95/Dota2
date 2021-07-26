import React from "react";
import {
  getRolesString,
  getStartingHP,
  getStartingHPRegen,
  getStartingMP,
  getStartingMPRegen,
} from "../../helper/helper";
import { agiIconSrc, intIconSrc, strIconSrc } from "../../constants";
import AttributeBar from "../AttributeBar/AttributeBar";
import "./GridView.css";

const GridView = ({ heroesList = [] }) => {
  let baseUrl = "https://api.opendota.com";
  return (
    <section className="grid-container">
      {heroesList.map((hero) => (
        <article
          className={`hero-container ${hero.primary_attr}`}
          key={hero.id}
        >
          <p className="hero-name">{hero.localized_name}</p>
          <div className="img-container">
            <img
              className="hero-img"
              src={baseUrl + hero.img}
              alt={`${hero.localized_name}`}
            />
          </div>
          <div className="hp-bar">
            {getStartingHP(hero.base_str, hero.base_health, hero.primary_attr)}{" "}
            <span>
              +{getStartingHPRegen(hero.base_health_regen, hero.base_str)}
            </span>
          </div>
          <div className="mana-bar">
            {getStartingMP(hero.base_int, hero.base_mana, hero.primary_attr)}{" "}
            <span>
              +{getStartingMPRegen(hero.base_mana_regen, hero.base_int)}
            </span>
          </div>
          <div className="overlay"></div>
          <p>{hero.attack_type}</p>
          <div className="roles">{getRolesString(hero.roles)}</div>
          <div className="additional-info">
            <AttributeBar
              imgSrc={strIconSrc}
              attribBase={hero.base_str}
              attribGain={hero.str_gain}
              alt="Strength Gain"
            />
            <AttributeBar
              imgSrc={agiIconSrc}
              attribBase={hero.base_agi}
              attribGain={hero.agi_gain}
              alt="Agility Gain"
            />
            <AttributeBar
              imgSrc={intIconSrc}
              attribBase={hero.base_int}
              attribGain={hero.int_gain}
              alt="Intelligence Gain"
            />
          </div>
        </article>
      ))}
    </section>
  );
};

export default GridView;
