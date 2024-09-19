import { MdStars } from "react-icons/md";

const Card = ({ name, cuisines, costForTwo, cloudinaryImageId,avgRating, areaName,locality }) => {

    const firstTwoCuisines = cuisines.slice(0, 2);

    return (
        <div className=" w-60 h-[327px] m-2  rounded-md flex-shrink-0  cursor-pointer overflow-hidden">
            <img className="w-60 h-44 rounded-md" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${cloudinaryImageId}`} alt={name} />
            <div className="pl-3">
                <h1 className="text-xl font-bold">{name}</h1>
                <h2 className="font-semibold flex items-center"><MdStars />{avgRating}. {costForTwo} </h2>
                <p>
                    {firstTwoCuisines.join(', ')}
                    {cuisines.length > 2 && '...'}
                </p>
                <p className="font-semibold text-zinc-600">{locality} {areaName}</p>
            </div>
        </div>
    )
}

export default Card;