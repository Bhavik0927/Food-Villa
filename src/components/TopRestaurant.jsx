import get from "lodash.get";
import Card from "./Card";

const TopRestaurant = ({ props }) => {
   
    const title = get(props, 'card.card.header.title');
    const restaurants = get(props, 'card.card.gridElements.infoWithStyle.restaurants');
    console.log(restaurants);
    return (
        <div className="pt-10">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="  flex overflow-x-auto whitespace-nowrap scroll-smooth m-2 custom-scrollbar">
                {
                    restaurants.map((e) => {
                        return <Card key={e.id} {...e.info} />
                    })
                }
            </div>
        </div>
    )
}

export default TopRestaurant;