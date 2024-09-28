import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocation from "../../utils/useLocation";
import LocationCard from "./LocationCard";
import Deals from "./Deals";
import RecommandedMenu from "./RecommandedMenu";
import { GrLocationPin } from "react-icons/gr";

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
        <div className="px-44 ">
            <h1 className="font-bold text-2xl mb-4">{restaurant[0]?.card?.card?.text}</h1>
            <LocationCard props={restaurant[2]?.card?.card?.info} />
            <Deals props={restaurant[3]?.card?.card?.gridElements?.infoWithStyle?.offers} />
            <RecommandedMenu props={restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards} />
            <div className="border border-red-500 w-full mb-1">
                <div className="flex justify-between">
                    <img className="w-10 h-10" src="../src/fssai-logo.png" alt="logo" />
                    <h1>License No. 11522077000251</h1>
                </div>
                <hr />
                <div>
                    <h1>{restaurant[0]?.card?.card?.text}</h1>
                    <h2>(Outlet:{restaurant[2]?.card?.card?.info?.areaName} )</h2>
                    <h2 className="flex gap-1 items-center"><GrLocationPin /> {(restaurant[2]?.card?.card?.info?.slugs.restaurant)} </h2>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;