import { MdStars } from "react-icons/md";
import { RiEBike2Line } from "react-icons/ri";

const LocationCard = ({ props }) => {

   const {avgRating,costForTwoMessage,cuisines,areaName} = props;
    console.log(props);
    return (
        <div className=" flex flex-col gap-2  rounded-3xl p-4 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
            <h1 className="flex items-center gap-1 font-bold text-lg"><MdStars className="text-green-500 text-lg" />{avgRating }. {costForTwoMessage} </h1>
            <h2 className="underline  text-orange-600 font-semibold">{cuisines.slice(0,2).join(', ')}</h2>
            <p className="text-neutral-400"><span className="text-black font-semibold ">Outlet</span> {areaName} </p>
            <p className="flex items-center gap-1 text-black font-semibold mb-1 ">{props.sla.slaString }</p>
            <p className="border-b-2"></p>
            <h2 className="flex items-center gap-2 text-neutral-400"><span className="text-black "> <RiEBike2Line /> </span>{props.feeDetails.message.replace(/<\/?b>/g, '')}</h2>
        </div>
    )
}

export default LocationCard;

// shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]