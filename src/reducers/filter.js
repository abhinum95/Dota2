export const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_TERM":
      return action.payload;
    default:
      return state;
  }
};
