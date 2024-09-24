import get from "lodash.get";
import { useState } from "react";
import MenuCard from "./MenuCard";

const Recommanded3 = ({ props }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(props);

    const Recommanded = get(props, '[4].card.card.itemCards');
    const Title = get(props, '[4].card.card.title');
    return (
        <div className="container px-24">

            <div className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)} >
                <h2 className="font-medium text-lg">{Title}</h2>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                </span>
            </div>
            {
                Recommanded.map((e, index) => { return <MenuCard key={index} prop={e.card.info} isOpen={isOpen} /> })
            }
        </div>
    )
}

export default Recommanded3;