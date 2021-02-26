import React from "react";
import { useTranslation } from "react-i18next";

function RestaurantDetail(props) {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  const { restaurantData } = props;
  return (
    <>
      {restaurantData.data.map((item, index) => {
        return (
          <div className="card rounded-3" id="roundedCard" key={index}>
            <div className="card-body">
              <img src={item.photo} id="imgRestaurant" alt="..."></img>
              <h5 className="card-title" id="a">
                {t(`${item.title}.1`)}
              </h5>
              <p className="card-text" id="a">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RestaurantDetail;
