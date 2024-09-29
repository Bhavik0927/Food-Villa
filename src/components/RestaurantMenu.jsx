import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocation from "../../utils/useLocation";
import LocationCard from "./LocationCard";
import Deals from "./Deals";
import RecommandedMenu from "./RecommandedMenu";
import { MdLocationPin } from "react-icons/md";

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
            <div className="bg-gray-100 w-full h-80 flex flex-col p-2 ">
                <div className="flex gap-3 overflow-hidden items-center">
                    <img className="w-20 h-13 pl-2 " src="../src/fssai-remove.png" alt="logo" />
                    <h1 className="text-gray-400 font-semibold">License No. 11522077000251</h1>
                </div>
                <hr className="h-1" />
                <div>
                    <h1 className="pt-2 text-gray-400 font-semibold">{restaurant[0]?.card?.card?.text}</h1>
                    <h2 className="text-gray-400">(Outlet:{restaurant[2]?.card?.card?.info?.areaName} )</h2>
                    <h2 className="flex gap-1 items-center py-4 text-gray-400 font-normal"><MdLocationPin /> {(restaurant[2]?.card?.card?.info?.slugs.restaurant).replace(/-/g, ' ')},{restaurant[2]?.card?.card?.info?.city} </h2>
                </div>
                <hr />
                <div className="flex justify-center">
                    <h1 className="font-bold flex items-center">For better experience, download Our Application</h1>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;