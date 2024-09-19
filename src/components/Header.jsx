import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-15 flex justify-between items-center border-solid border-2 border-gray-500 ">
            <ul className="flex gap-3 font-bold text-md">
                <Link to="/">
                    <li>Home</li>
                </Link>

                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/instamart">
                    <li>InstaMart</li>
                </Link>
                <Link to="/cart">
                    <li data-testid="cart">CartItem</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header