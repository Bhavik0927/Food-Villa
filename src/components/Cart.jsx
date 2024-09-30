import { useDispatch, useSelector } from "react-redux";
import { Remove_Item, Increase_quantity, Decrease_quantity } from "../../utils/CartSlice";
import { MdOutlineCancel } from "react-icons/md";
import EmptyCart from "./EmptyCart";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  
  const dispatch = useDispatch();

  const total = cartItems.reduce((total, item) => { return total + item.inStock * item.price }, 0);


  return (cartItems.length === 0) ? (<EmptyCart />) : (
    <div className=" flex px-40 py-2">

      <div className="flex flex-col gap-1 w-3/4 ">
        <h1 className="font-medium">Your Order</h1>
        <div className=" p-1 overflow-y-auto whitespace-nowrap scroll-smooth custom-scrollbar m-2 h-96 mb-1 ">
          {
            cartItems.map((e, index) => {
              return <>
                <div className="p-3 flex gap-1 justify-evenly items-center rounded-lg  h-auto w-auto  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-1 ">
                  <img className=" w-20 h-20 rounded-full cursor-pointer" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${e.imageId}`} alt={e.name} />

                  <h2 className="font-medium  text-wrap">{e.name}</h2>

                  <div className="border border-zinc-400 rounded-3xl w-24 h-9 flex items-center justify-evenly">
                    <button className="text-3xl " onClick={() => dispatch(Decrease_quantity(e.id))}>
                      -
                    </button>
                    <span className="font-semibold text-gray-700">{e.inStock}</span>
                    <button className="text-2xl" onClick={() => dispatch(Increase_quantity(e.id))}> +
                    </button>
                  </div>

                  <h2>₹{Math.floor(e.price / 100) * (e.inStock)}</h2>
                  <button className="text-green-500 text-xl" onClick={() => dispatch(Remove_Item(e.id))}><MdOutlineCancel /> </button>
                </div>

              </>
            })
          }
          <div>
            <h1 className="pt-4 float-right text-xl font-medium">SubTotal: ₹{(total / 100)} </h1>
          </div>
        </div>

      </div>

      <div className="w-1.75/4 bg-slate-300 rounded-lg min-h-5">
        <h1 className="text-white font-medium">Bill Details</h1>
        <div className="flex flex-col items-center gap-5">
          <div className="p-2 rounded-lg w-64 h-32 bg-white  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" >
            <div className="flex justify-between">
              <h1>Item Total</h1>
              <h1>{(total / 100).toFixed(2)}</h1>
            </div>
            <div className="flex justify-between">
              <h1>Delivery Fee</h1>
              <h1>₹40</h1>
            </div>
            <hr />
            <div className="flex justify-between pt-1">
              <h1>Total:</h1>
              <h1>₹{(total / 100) + 40}</h1>
            </div>
          </div>

          <button className="bg-yellow-400 px-2 py-1 rounded-lg text-white font-medium cursor-pointer" >Place Your Order</button>
        </div>
      </div>

    </div>
  )
}

export default Cart;