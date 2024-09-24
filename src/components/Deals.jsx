const Deals = ({ props }) => {

  // console.log(props);
  return (
    <div className=" my-4">
      <h1 className="font-bold text-xl mb-4">Deals for you</h1>
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap scroll-smooth m-2 custom-scrollbar mb-4">
        {
          props.map((e) => {
            return (
              <div key={e.info.description} className="p-3 w-[330px] h-20 flex rounded-2xl flex-shrink-0 gap-2 cursor-pointer overflow-hidden border border-zinc-500 mb-3">
                  <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_85,h_85/${e.info.offerLogo}`} alt='' />
                  <div className=" flex flex-col justify-center ">
                    <h1 className="font-bold text-xl">{e.info.header}</h1>
                    <p className=" font-semibold text-sm text-neutral-400 ">{e.info.description}</p>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Deals;