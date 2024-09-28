import get from "lodash.get";
import Card from "./Card";
import { Link } from "react-router-dom";

const OnlineDeliveryRestro = ({ props, props2 }) => {

    const title = get(props, 'card.card.title');
    const restaurants = get(props2, 'card.card.gridElements.infoWithStyle.restaurants');
    
    
    return (
        <div className="px-40 ">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className=" flex flex-wrap justify-center scroll-smooth m-2 mb-2 ">
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

export default OnlineDeliveryRestro;