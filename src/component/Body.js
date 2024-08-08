import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// function filterData(searchText,setSearchText){
//   const resFilterData=restaurants.filter((restaurants)=>
//   restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
//   return resFilterData;
// }

const Body = () => {
   const [ListOfRestaurents,setListOfRestaurents]= useState([]);
   const [filterRestaurents,setfilterRestaurents]= useState([]);
   const [searchText,setSearchText]= useState("");
   const onlineStatus = useOnlineStatus();

   //whenever there is change in state variable it will rerenders 

   useEffect(()=>{
    fetchData(); 
   },[]);
   //it stops it to render after

    const fetchData=async()=>{
      try{
         const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

    const json= await data.json();
    console.log(json);
    setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.
        infoWithStyle?.restaurants);

    setfilterRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  }

    catch(error)
    {
      console.error("Failed",error)
    }
    
    };


   if(!onlineStatus){
    return <h1>Looks like you're offline !!! </h1>;
   }

    return ListOfRestaurents.length===0?(
    <h1>loading</h1>
  ) : (
    <div className="mbody">
      <div>
       <input type="text" 
        className="border border-solid border-black rounded-lg" 
        value={searchText} 
        onChange={(e)=> 
          setSearchText(e.target.value)}/>

        <button className="px-4 py-2 bg-green-50 m-4 rounded-lg"
         onClick={()=>{
          const filterRestaurents=ListOfRestaurents.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

          setfilterRestaurents(filterRestaurents);
        }}>
          Search
          </button>
      </div>


        <div className="filter">
          <div className="px-4 py-2 m-4 bg-gray-100 flex items-center rounded-lg">
          <button
        className="px-4 py-2 bg-gray-100 flex rounded-lg"
        onClick={()=> {
            const filteredList=filterRestaurents.filter((res) => res.info.avgRating > 4);
            setListOfRestaurents(filteredList);
        }}
        >
            Top Rated Restaurants
            </button>
          </div>
        
        </div>
        
      <div className="flex flex-wrap">
        {filterRestaurents.map((restaurant) => (
          <Link 
          key={restaurant.info.id} 
          to={ "/restaurants/" + restaurant.info.id } >
            <RestaurantCard resData={restaurant} />
          </Link>
          ))}
      </div>
    </div>
    );
};

  export default Body;

  //react is farter because :- react rerender whole component and finding the difference between prev and curr state and update only required field

  //react fiber makes it faster :  

  