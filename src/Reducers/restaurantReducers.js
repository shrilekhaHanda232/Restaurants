const initialState = {
  restaurantList: [],
  visibleRestaurantList: [],
  menuList: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "RESTAURANT_LIST":
      return {
        ...state,
        restaurantList: action.payload,
        visibleRestaurantList: action.payload,
      };
    case "VISIBLE_RESTAURANT_LIST":
      return {
        ...state,
        visibleRestaurantList: action.payload,
      };
    case "SET_MENU_LIST":
      return {
        ...state,
        menuList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
