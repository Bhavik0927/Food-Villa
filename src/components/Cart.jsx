import { useDispatch, useSelector } from "react-redux";
import { Remove_Item, Increase_quantity, Decrease_quantity } from "../../utils/CartSlice";
import { MdOutlineCancel } from "react-icons/md";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const total = cartItems.reduce((total, item) => { return total + item.inStock * item.price }, 0);


  return (cartItems.length === 0) ? ("Cart is Empty...") : (
    <div className=" flex px-5 py-2">

      <div className="flex flex-col gap-1 w-3/4 px-2">
        <h1>Your Order</h1>
        {
          cartItems.map((e, index) => {
            return <>
              <div className="p-4 flex justify-between items-center rounded-lg  h-auto w-auto  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
                <img className=" w-20 h-20 rounded-full cursor-pointer" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${e.imageId}`} alt={e.name} />
                <h2>{e.name}</h2>
                <div className="border border-zinc-400 rounded-3xl w-24 h-9 flex items-center justify-evenly">
                  <button className="text-3xl " onClick={() => dispatch(Decrease_quantity(e.id))}>
                    -
                  </button>
                  <span className="font-semibold text-gray-700">{e.inStock}</span>
                  <button className="text-2xl" onClick={() => dispatch(Increase_quantity(e.id))}> +
                  </button>
                </div>

                <h2>₹{Math.floor(e.price / 100) * (e.inStock)}</h2>
                <button className="text-green-500" onClick={() => dispatch(Remove_Item(e.id))}><MdOutlineCancel /> </button>
              </div>

            </>
          })
        }
        <div>
          <h1 className="pt-4 float-right text-xl font-medium">SubTotal: ₹{(total / 100)} </h1>
        </div>

      </div>

      <div className="w-2/4 bg-slate-300 rounded-lg min-h-5">
        <h1>Bill Details</h1>
        <div className="flex flex-col items-center gap-5">
          <div className="p-2 rounded-lg w-72 h-32 bg-white  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" >
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
              <h1>{(total / 100) + 40}</h1>
            </div>
          </div>

          <button className="bg-orange-300 px-2 py-1 rounded-lg text-white font-medium">Checkout Your Order</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;