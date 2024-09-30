import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className="flex justify-center items-center  h-[35rem] ">
           
            <h1 className="text-3xl">Cart is Empty. <span>Add some items from <Link to="/" className="text-yellow-300 font-bold underline">Home</Link></span></h1>
        </div>
    )
}

export default EmptyCart