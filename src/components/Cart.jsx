import { useDispatch, useSelector } from "react-redux";
import { Increase_quantity, Decrease_quantity } from "../../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col gap-1">
        <h1>Your Order</h1>
        {
          cartItems.map((e, index) => {
            return <>
              <div className="p-4 flex justify-between items-center rounded-lg border border-red-500 h-auto w-2/4">
                <img className="border border-red-400 w-20 h-20 rounded-full" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${e.imageId}`} alt={e.name} />
                <h2>{e.name}</h2>
                <p className="mt-2">
                  Quantity:
                  <button className=" text-black px-3 py-1 mx-2 rounded-lg" onClick={() => dispatch(Decrease_quantity(e.id))}>
                    -
                  </button>
                  <span className="font-semibold text-gray-700">{e.inStock}</span>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 mx-2 rounded-lg hover:bg-blue-600"
                    onClick={() => dispatch(Increase_quantity(e.id))}
                  >
                    +
                  </button>
                </p>
                <h2>₹{Math.floor(e.price / 100)}</h2>
              </div>
            </>
          })
        }

      </div>
      <div>

      </div>
    </>
  )
}

export default Cart;