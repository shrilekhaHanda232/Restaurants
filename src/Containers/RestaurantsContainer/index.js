import React, { useEffect } from "react";
import { connect } from "react-redux";
import Restaurant from "../../Components/Restaurant";
import restaurantActions from "../../Actions/restaurantsActions";

function RestaurantsContainer(props) {
  useEffect(() => {
    if (!props.restaurantList.length) {
      props.getRestaurantList();
    }
  });
  const restaurantRendrer = () => {
    let menuList = {};
    let restaurantList = [];

    props.restaurantList.map((restaurant) => {
      if (!Object.keys(props.menuList).length) {
        for (let key in restaurant) {
          let value = restaurant[key];
          if (value === "NaN" || value === "Nan") {
          } else if (key === "Top Ten") {
            let array = value.split(" ");
            let year = array[0],
              rank = array[1];
            if (!menuList.Year) {
              menuList.Year = {};
              menuList.Rank = {};
            }
            menuList.Year[year] = 1;
            menuList.Rank[rank] = 1;
            restaurant.Year = year;
            restaurant.Rank = rank;
          } else if (menuList[key] && menuList[key][value]) {
            menuList[key][value] += 1;
          } else if (menuList[key] && !menuList[key][value]) {
            menuList[key][value] = 1;
          } else if (!menuList[key]) {
            menuList[key] = {};
            menuList[key][value] = 1;
          }
        }
      }
      restaurantList.push(<Restaurant restaurant={restaurant} />);
    });
    if (!Object.keys(props.menuList).length && Object.keys(menuList).length) {
      props.setMenuList(menuList);
    }
    return restaurantList;
  };
  return <>{props.restaurantList.length ? restaurantRendrer() : null}</>;
}
const mapStateToProps = (store) => {
  return {
    restaurantList: store.restaurantReducer.visibleRestaurantList,
    menuList: store.restaurantReducer.menuList,
  };
};
const mapActionsToProps = {
  getRestaurantList: restaurantActions.getRestaurantList,
  setMenuList: restaurantActions.setMenuList,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(RestaurantsContainer);
