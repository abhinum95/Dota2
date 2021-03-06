export const heroesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return [...state, ...action.payload];
    case "FILTER_DATA":
      return state.filter((hero) => {
        console.log(hero.localized_name, action.payload);
        return hero.localized_name.indexOf(action.payload) > -1;
      });
    default:
      return state;
  }
};
