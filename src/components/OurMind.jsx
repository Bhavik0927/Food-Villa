const OurMind = ({ props }) => {

    return (
        <>
            <h1 className="text-2xl font-bold">What's on your mind?</h1>
            <div className="h-52 flex gap-1 items-center justify-between p-2   overflow-x-auto whitespace-nowrap scroll-smooth custom-scrollbar ">
                {props?.card?.card?.imageGridCards?.info?.map((e, index) => {
                    return (<img className=" h-full cursor-pointer" key={e.id} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_250,h_360/${e.imageId}`} alt={e.description} />)
                })}
            </div>
        </>
    )
}

export default OurMind;