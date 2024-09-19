import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import useLocation from "../../utils/useLocation";

const RestaurantMenu = () => {
    const [restaurant, setRestaurant] = useState([]);

    let { id } = useParams();
    let {location} = useLocation();

    useEffect(() =>{
        if(location){
            getRestaurantData(location);
        }
    },[location]);

    const getRestaurantData = async (location) => {
        try {
            console.log(location);
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location.latitude}&lng=${location.longitude}&restaurantId=` + id);
            const response = await data.json();
            setRestaurant(response.data.cards);
            console.log(response.data.cards); 

        } catch (error) {
            console.log(error)
        }
    }

    return (restaurant.length === 0) ? ("Data is fetching...") : (
        <h1>Data is fetched</h1>
    )
}

export default RestaurantMenu;