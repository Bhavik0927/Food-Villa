
const MenuShimmer = () => {
    return (
        <div className="  flex flex-col justify-evenly gap-2 px-44 ">
            <div className="bg-gray-300 h-4 w-24 rounded-lg"></div>
            <div className="w-full rounded-lg h-56 bg-gray-300"></div>
            <div className="w-full flex justify-evenly rounded-lg  border border-gray-300 p-3">
                <div className="bg-gray-300 rounded-lg w-[330px] h-12 "></div>
                <div className="bg-gray-300 rounded-lg w-[330px] h-12 "></div>
                <div className="bg-gray-300 rounded-lg w-[210px] h-12 "></div>
            </div>
        </div>
    )
}

export default MenuShimmer;