import get from "lodash.get";
import Card from "./Card";
import { Link } from "react-router-dom";

const TopRestaurant = ({ props }) => {
   
    const title = get(props, 'card.card.header.title');
    const restaurants = get(props, 'card.card.gridElements.infoWithStyle.restaurants');
    
    return (
        <div className="pt-10 px-44 ">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="  flex overflow-x-auto whitespace-nowrap scroll-smooth m-2 custom-scrollbar">
                {
                    restaurants.map((e) => {
                        return (<Link to={"/restaurant/" + e?.info?.id} key={e?.info?.id}>
                            <Card {...e.info} />
                        </Link>)
                    })
                }
            </div>
        </div>
    )
}

export default TopRestaurant;