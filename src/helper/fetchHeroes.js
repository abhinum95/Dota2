import { extract } from "jest-docblock";
import openDOTA from "../services/api";

let heroesList;

const fetchHeroStats = () => {
  openDOTA
    .get("/heroStats")
    .then((response) => {
      console.log(response.data);
      heroesList = response.data.map((heroDetails) => extractData(heroDetails));
    })
    .catch((error) => console.log(error));
  return heroesList;
};

const extractData = (heroDetails) => {
  return {
    herald_pick: heroDetails["1_pick"],
    herald_win: heroDetails["1_win"],
    guardian_pick: heroDetails["2_pick"],
    guardian_win: heroDetails["2_win"],
    crusader_pick: heroDetails["3_pick"],
    crusader_win: heroDetails["3_win"],
    archon_pick: heroDetails["4_pick"],
    archon_win: heroDetails["4_win"],
    legend_pick: heroDetails["5_pick"],
    legend_win: heroDetails["5_win"],
    ancient_pick: heroDetails["6_pick"],
    ancient_win: heroDetails["6_win"],
    divine_pick: heroDetails["7_pick"],
    divine_win: heroDetails["7_win"],
    immortal_pick: heroDetails["8_pick"],
    immortal_win: heroDetails["8_win"],
    agi_gain: heroDetails.agi_gain,
    attack_range: heroDetails.attack_range,
    attack_rate: heroDetails.attack_rate,
    base_agi: heroDetails.base_agi,
    base_armor: heroDetails.base_armor,
    base_attack_max: heroDetails.base_attack_max,
    base_attack_min: heroDetails.base_attack_min,
    base_attack_median: Math.round(
      (heroDetails.base_attack_min + heroDetails.base_attack_min) / 2
    ),
    base_health: heroDetails.base_health,
    base_health_regen: heroDetails.base_health_regen,
    base_int: heroDetails.base_int,
    base_mana: heroDetails.base_mana,
    base_mana_regen: heroDetails.base_mana_regen,
    base_mr: heroDetails.base_mr,
    base_str: heroDetails.base_str,
    cm_enabled: heroDetails.cm_enabled,
    hero_id: heroDetails.hero_id,
    icon: heroDetails.icon,
    id: heroDetails.id,
    img: heroDetails.img,
    int_gain: heroDetails.int_gain,
    legs: heroDetails.legs,
    localized_name: heroDetails.localized_name,
    move_speed: heroDetails.move_speed,
    primary_attr: heroDetails.primary_attr,
    pro_ban: heroDetails.pro_ban,
    pro_pick: heroDetails.pro_pick,
    pro_win: heroDetails.pro_win,
    projectile_speed: heroDetails.projectile_speed,
    roles: heroDetails.roles,
    str_gain: heroDetails.str_gain,
  };
};

export default fetchHeroStats;
