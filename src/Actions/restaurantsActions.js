import axios from "../Utils/axios";

const restaurantActions = {
  getRestaurantList: () => {
    return (dispatch) => {
      return axios({
        url: `https://serverfake.herokuapp.com/topRamen`,
        method: "GET",
      })
        .then((resp) => {
          dispatch({
            type: "RESTAURANT_LIST",
            payload: resp.data,
          });
        })
        .catch((err) => {
          console.log(err, "err");
        });
    };
  },
  setVisibleRestaurantList: (data) => {
    return (dispatch) => {
      dispatch({
        type: "VISIBLE_RESTAURANT_LIST",
        payload: data,
      });
    };
  },
  setMenuList: (data) => {
    return (dispatch) => {
      dispatch({
        type: "SET_MENU_LIST",
        payload: data,
      });
    };
  },
};

export default restaurantActions;
