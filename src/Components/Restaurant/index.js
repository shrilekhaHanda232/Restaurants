import React, { useState } from "react";
import "./index.css";
import { Card } from "antd";
import { ShopTwoTone, FlagTwoTone, StarFilled } from "@ant-design/icons";

function Restaurant(props) {
  let { restaurant } = props;
  let stars = [];
  let starsHandler = (num) => {
    for (let i = 0; i < 5; i++) {
      let className = i < Math.round(num) ? "yellow-icon" : "grey-icon";
      stars.push(<StarFilled className={className} />);
    }
    return stars;
  };
  const extraHanlder = (year, rank) => {
    return (
      <div>
        {year}
        <span className="red-color"> {rank}</span>
      </div>
    );
  };
  return (
    <>
      <Card
        className="restaurant-card"
        size="small"
        title={
          <>
            <ShopTwoTone className="margin-right" twoToneColor="#008c38" />
            {restaurant.Brand}
          </>
        }
        extra={extraHanlder(restaurant.Year, restaurant.Rank)}
      >
        <p>
          <strong>Variety: </strong>
          {restaurant.Variety}
        </p>
        <p>
          <strong>Style: </strong>
          {restaurant.Style}
        </p>
        <p>
          <FlagTwoTone className="margin-right" twoToneColor="#008c38" />
          {restaurant.Country}
        </p>
        <p>{starsHandler(restaurant.Stars)}</p>
      </Card>
    </>
  );
}

export default Restaurant;
