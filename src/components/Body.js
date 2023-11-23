import { RestaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
    
     const filterdata = restaurants.filter((restaurant) => {
        return restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase());
        
    })
    return filterdata;

}

 

const Body = () => {
    
    const [searchInput, setSearchInput] = useState("");
    const [searchClicked, setSearchClicekd] = useState("false");
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [AllRestaurant, setAllRestaurant] = useState([])
//     function filterData() {
        
//         const data = restaurant.filter((restaurant )=> {
            
//               return restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())});
        
       
//         setRestaurant(data); 
//    }


   async function getRestaurants() {
    try {
        
       const data = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5804163&lng=88.376133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    

    }catch(error) {
        console.log(error);
    }
    
   }

   useEffect(()=> {
    
    getRestaurants();
    

   },[]);

//    useEffect(()=> {
//     if(searchInput=== '') {
//         getRestaurants();
//     }

//    },[searchInput])

   

   const handleFilter = ()=> {
    const data = filterData(searchInput,AllRestaurant);
    // if(data.length === 0){
    //     alert("NO restaurant found")
    //     return
    // }
   
     setFilteredRestaurant(data);
   }

   //if(filteredRestaurant.length === 0) return <h1>No Such Restautrant is present!!</h1>

  
    return (AllRestaurant?.length === 0) ? <Shimmer/> : (
        <>
        
        <div className="search-container">
            <input
             type="text" 
             className="search-input" 
             placeholder="Search..." 
             value = {searchInput}
             onChange={(e)=>{
                setSearchInput(e.target.value);

             }}
             
             />
             
             
             <button className="search-btn" onClick={ handleFilter}>Search</button>




        </div>
     <div className="restaurant">
         
         {
             filteredRestaurant?.map((restaurant) => {
                 return <RestaurantCard {...restaurant.info}   key={restaurant.id}/>
             })
         }
         
     </div>
     </>
     
    );
    
    
     
 };

 export default Body