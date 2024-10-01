const Shimmer = () => {
    return (
        <>
            <div className="flex flex-col justify-evenly  gap-2 min-h-[16rem] px-44 ">
                <div className="w-1/2 rounded-full h-4 bg-gray-300 mt-2 "></div>
                <div className="w-full h-[12rem] flex justify-center items-center gap-3 ">
                    {
                        Array(8).fill("").map((e, index) => {
                            return (
                                <div className="flex flex-col items-center " key={index}>
                                    <div className="h-24 w-24 rounded-full bg-gray-300"></div>
                                    <div className="bg-gray-300 w-[4.5rem] h-2 mt-2 rounded-full"></div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

            <div className="flex flex-col gap-2  px-44">
                <div className="w-1/2 rounded-full h-4 bg-gray-300 mt-5"></div>
                <div className="w-full  flex  justify-center  flex-wrap gap-3 ">
                    {
                        Array(6).fill('').map((e, index) => {
                            return (
                                <div key={index} className="flex flex-col justify-center ">
                                    <div className="w-60 h-44 m-2  rounded-md flex-shrink-0  cursor-pointer bg-gray-300"></div>
                                    <div className="bg-gray-300 w-[5.5rem] h-2 mt-2 rounded-full ml-5"></div>
                                    <div className="bg-gray-300 w-[5.5rem] h-2 mt-2 rounded-full ml-5"></div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Shimmer;



