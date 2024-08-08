import { useState, useEffect } from "react";
// import {MENU_API} from "../utils/constants"
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
//  const [resInfo, setResInfo] = useState(null);

   const {resId}=useParams();
   const resInfo= useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

 


  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.[2]?.card
    ?.card?.info || { name: "N/A", cuisines: [], costForTwoMessage: "N/A" };

   const  itemCards  =
     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

     console.log(itemCards);

     return resInfo === null ? 
        (
          <div className="Shimmer">
            <h1>Loading</h1>
          </div>
        ): (
    <div>
      <h1>Name:{name}</h1>
      <p>
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li>{item.card.info.name} - {" "}
          Rs:{item.card.info.price / 100}/ </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
