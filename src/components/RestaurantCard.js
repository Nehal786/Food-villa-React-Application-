import { IMG_CDN_URL } from "../contants";

const RestaurantCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
    console.log(name,cuisines,avgRating,cloudinaryImageId);
    return(
        <div className="card">
            <img  
            src={IMG_CDN_URL +
            cloudinaryImageId 
        }></img>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4> 
        </div>
    )
}

export default RestaurantCard