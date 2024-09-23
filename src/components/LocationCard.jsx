import { MdStars } from "react-icons/md";
import { RiEBike2Line } from "react-icons/ri";

const LocationCard = ({ props }) => {
    return (
        <div className="border border-zinc-400 rounded-md p-2">
            <h1 className="flex items-center gap-1"><MdStars />{props.avgRating }. {props.costForTwoMessage} </h1>
            <h2>{props.cuisines.slice(0,2).join(', ')}</h2>
            <p><span>Outlet</span> {props.areaName} </p>
            <p className="flex items-center gap-1"><RiEBike2Line /> {props.sla.slaString }</p>
        </div>
    )
}

export default LocationCard