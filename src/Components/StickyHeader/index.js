import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AlertTwoTone, FilterTwoTone } from "@ant-design/icons";
import "./index.css";
import FilterDropDown from "./FilterDropDown";
import SearchDropDown from "./SearchDropDown";
import { Row, Col } from "antd";
import restaurantActions from "../../Actions/restaurantsActions";

function StickyHeader(props) {
  const [searchVal, setSearchVal] = useState(null);
  const [filterSearchVal, setFilterSearchVal] = useState(null);
  const [selectedSearchKeys, setSelectedSearchKeys] = useState([]);
  const [menuList, setMenuList] = useState({});
  const [filterMenuList, setFilterMenuList] = useState({});
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    if (
      !Object.values(menuList).length &&
      Object.values(props.menuList).length
    ) {
      setMenuList(props.menuList);
      setFilterMenuList(props.menuList);
    }
  });

  const onSearchHandler = (e) => {
    let value = e.target.value;
    setSearchVal(value);
  };
  const handleMenuClick = (e, fromSearch) => {
    let { key, item } = e;
    let title = item.props && item.props.title;
    let restaurantList = [...props.restaurantList];
    let newRestaurantList = restaurantList.filter((item) => {
      let value = item[title];
      if (
        title === "Rank" &&
        title === "Year" &&
        value &&
        key &&
        value.includes(key)
      ) {
        return item;
      } else if (title === "Stars" && value && key) {
        let val = value.toString(),
          keyVar = key.toString();
        if (val.includes(keyVar)) return item;
      } else if (
        value &&
        key &&
        value.toLowerCase().includes(key.toLowerCase())
      ) {
        return item;
      }
    });
    props.setVisibleRestaurantList(newRestaurantList);

    setSelectedSearchKeys([key]);
    if (fromSearch) {
      setSearchVal(key);
      setFilterSearchVal(null);
    } else {
      setSearchVal(null);
      setFilterSearchVal(`${title} / ${key}`);
    }
  };
  const filterSelectedOptionRemoval = () => {
    props.setVisibleRestaurantList(props.restaurantList);
    setSelectedSearchKeys([]);
    setSearchVal(null);
    setFilterSearchVal(null);
    setShowClose(false);
  };
  return (
    <div className="sticky-header-container">
      <Row className="sticky-header">
        <Col span={24} style={{ marginBottom: "10px" }}>
          <SearchDropDown
            menuList={menuList}
            searchVal={searchVal}
            handleMenuClick={handleMenuClick}
            selectedSearchKeys={selectedSearchKeys}
            onSearchHandler={onSearchHandler}
          />
        </Col>
        <Col span={12}>
          <p>
            <AlertTwoTone className="margin-right" twoToneColor="#008c38" />
            <strong>Restaurants</strong>
          </p>
        </Col>
        <Col className="filters-section" span={12}>
          <div className="filter-text">
            <FilterTwoTone className="margin-right" twoToneColor="#008c38" />
            Filter
          </div>
          <div className="filter-drop-down">
            <FilterDropDown
              menuList={filterMenuList}
              searchVal={filterSearchVal}
              handleMenuClick={handleMenuClick}
              selectedSearchKeys={selectedSearchKeys}
              showClose={showClose}
              setShowClose={setShowClose}
              closeHandler={filterSelectedOptionRemoval}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    menuList: store.restaurantReducer.menuList,
    restaurantList: store.restaurantReducer.restaurantList,
  };
};

const mapActionsToProps = {
  setVisibleRestaurantList: restaurantActions.setVisibleRestaurantList,
};
export default connect(mapStateToProps, mapActionsToProps)(StickyHeader);
