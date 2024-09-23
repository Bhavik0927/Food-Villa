import get from "lodash.get";
import MenuCard from "./MenuCard";

const RecommandedMenu = ({ props }) => {
    const Recommanded = get(props,'[2].card.card.itemCards');
    return (
        <div className="px-24">
            <h1>Recommanded </h1>
            {
                Recommanded.map((e,index) =>{return <MenuCard key={index} prop={e.card.info} />})
            }
        </div>
    )
}

export default RecommandedMenu;

// e.card.info