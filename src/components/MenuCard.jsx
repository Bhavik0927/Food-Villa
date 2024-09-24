import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/CartSlice";
import { useState } from "react";

const MenuCard = ({ prop, isOpen }) => {
    const dispatch = useDispatch();
    const addFoodItem = (item) => { dispatch(addItem(item)); }

    const { name, description, imageId } = prop;
    const prodPrice = prop?.defaultPrice || prop?.price;
    // console.log(prop); 
    return (
        <>
            {isOpen && (
                <div className='border-b border-zinc-300 py-10 flex justify-evenly mb-2'>
                    <div className='w-3/4 px-3 '>
                        <h1 className="font-bold text-xl">{name}</h1>
                        <p className="font-semibold">₹{prodPrice / 100} </p>
                        <h2 className="flex items-center  font-bold text-green-500"><FaStar />{prop.ratings.aggregatedRating.rating} <span className="text-black font-semibold ml-2">{prop.ratings.aggregatedRating.ratingCount} </span> </h2>
                        <p>{description}</p>
                    </div>
                    <div className='relative'>
                        <img className='w-[156px] h-[144px] rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt={name} />
                        <button className=' absolute -bottom-3 right-5  bg-white font-bold text-green-500  w-28 h-8 rounded-lg hover:bg-slate-200 ' onClick={() => addFoodItem(prop)}>ADD</button>
                    </div>
                </div>
            )}

        </>

    )
}

export default MenuCard