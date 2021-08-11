import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { applyFilter, updateSearchTerm } from "../../actions/heroes";

const SearchBar = () => {
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateSearchTerm(e.target.value));
  };
  const applyFilters = (e) => {
    e.preventDefault();
    dispatch(applyFilter(searchTerm));
  };

  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button onClick={applyFilters}>Apply</button>
    </form>
  );
};

export default SearchBar;
