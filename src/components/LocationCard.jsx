import { MdStars } from "react-icons/md";

const LocationCard = ({ props }) => {
    return (
        <div className="border border-zinc-400 rounded-md p-2">
            <h1 className="flex items-center"><MdStars />{props.avgRating }. {props.costForTwoMessage} </h1>
            <h2>{props.cuisines.slice(0,2).join(', ')}</h2>
            <p><span>Outlet</span> {props.areaName} </p>
            <p>{props.sla.slaString }</p>
        </div>
    )
}

export default LocationCard