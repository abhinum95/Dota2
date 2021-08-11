export const updateSearchTerm = (searchTerm) => {
  return { type: "UPDATE_SEARCH_TERM", payload: searchTerm };
};

export const applyFilter = (query) => {
  console.log(query);
  return { type: "FILTER_DATA", payload: query };
};
