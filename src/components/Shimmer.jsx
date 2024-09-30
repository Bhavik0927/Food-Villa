const Shimmer = () => {
    return (
        <>
            <div className="flex flex-wrap  gap-5 min-h-96 px-40">
                <div className="w-1/2 rounded-full h-4 bg-gray-300 mt-5"></div>
                <div className="w-full flex gap-3 ">
                    {
                        Array(6).fill("").map((e, index) => {
                            return (
                                <div className="flex flex-col items-center" key={index}>
                                    <div className="h-20 w-20 rounded-full bg-gray-300"></div>
                                    <div className="bg-gray-300 w-10 h-2 mt-2"></div>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

            <div className="border border-gray-300 w-full flex flex-col flex-wrap gap-1 px-40 ">
                <div className="w-1/2 rounded-full h-4 bg-gray-300 mt-5"></div>
                <div className="flex flex-wrap gap-2">
                    {
                        Array(6).fill('').map((e, index) => {
                            return (
                                <div key={index} className="w-60 h-[327px] m-2  rounded-md flex-shrink-0  cursor-pointer bg-gray-300">

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
