import get from "lodash.get";
import MenuCard from "./MenuCard";
import { useState } from "react";

const RecommandedMenu = ({ props }) => {
    const [isOpen, setIsOpen] = useState(false);
   
    const Recommanded = get(props, '[2].card.card.itemCards');
    const Title = get(props,'[2].card.card.title');
    
    return (
        <div className="container ">

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

export default RecommandedMenu;

// e.card.info