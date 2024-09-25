
const CartMenuPage = ({ prop }) => {
    // console.log(prop);
    const { name, price, imageId, inStock } = prop;

    const handleIncrease = (itemId) => {
        dispatch(increaseQuantity(itemId));
      };

    return (
        

    )
}

export default CartMenuPage