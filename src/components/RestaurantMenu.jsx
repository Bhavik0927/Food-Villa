import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocation from "../../utils/useLocation";
import LocationCard from "./LocationCard";
import Deals from "./Deals";
import RecommandedMenu from "./RecommandedMenu";

const RestaurantMenu = () => {
    const [restaurant, setRestaurant] = useState([]);

    let { id } = useParams();
    let { location } = useLocation();

    useEffect(() => {
        if (location) {
            getRestaurantData(location);
        }
    }, [location]);

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
        <>
            <h1>{restaurant[0].card.card.text}</h1>
            <LocationCard props = {restaurant[2].card.card.info} />
            <Deals props={restaurant[3]?.card?.card?.gridElements?.infoWithStyle?.offers} />
            <RecommandedMenu props={restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards} />
        </>
    )
}

export default RestaurantMenu;