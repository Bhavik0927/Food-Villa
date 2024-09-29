import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const storeItems = useSelector((store) => store.cart.items);

    return (
        <div className="sticky top-0 z-10 bg-gray-50 flex justify-between overflow-hidden h-[6rem] items-center  pr-2">
            <img className="w-[11rem] h-[9rem] cursor-pointer " src="../src/file.png" alt="food" />
            <div className="w-3/4 flex justify-evenly ">
                <ul className="flex gap-10 font-semibold text-xl">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>

                <Link to="/cart">
                    <li className="relative flex items-center text-2xl ">
                    🛒<span className="w-6 h-6  flex items-center justify-center rounded-full m-auto text-sm font-bold  absolute -top-[10px] -right-5 bg-yellow-400">{storeItems.length} </span>
                    </li>
                </Link>
            </div>
        </div>
    )
}

export default Header