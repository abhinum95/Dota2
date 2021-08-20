import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { applyFilter, updateSearchTerm } from "../../actions/heroes";

const SearchBar = () => {
  const baseUrl = "https://api.opendota.com/api";
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const rawList = useSelector((state) => state.heroesList);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateSearchTerm(e.target.value));
    setSearchTerm(e.target.value);
    getAutocompleteList();
  };

  const getAutocompleteList = () => {
    setFilteredList(
      rawList.filter((hero) =>
        hero.localized_name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  };

  const applyFilters = (e) => {
    e.preventDefault();
    dispatch(applyFilter(searchTerm));
  };

  return (
    <form>
      <input type="text" onChange={handleChange} />
      <ul className="autocomplete-list">
        {searchTerm &&
          filteredList.map((hero) => (
            <li key={hero.id}>
              <img src={baseUrl + hero.icon} alt={hero.localized_name} />{" "}
              <span className="heroName"> {hero.localized_name} </span>
            </li>
          ))}
      </ul>
      <button onClick={applyFilters}>Apply</button>
    </form>
  );
};

export default SearchBar;
