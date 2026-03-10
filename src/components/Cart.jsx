import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function Cart() {
  const { cart, setCart } = useContext(ProductContext);
  console.log(cart);
  return (
    <>
      <div >
        {cart.map((item) => (
          <div className="innerDiv" key={item.id}>
                            <p>{item.brand}</p>
                            <img src={item.thumbnail} alt="image" />
                            <div>
                                <h4>{item.title}</h4>
                                <h5>({item.availabilityStatus})</h5>
                            </div>
                            <div>
                                <h2>₹{item.price}</h2>
                                {/* <button type="submit" className="cartbtn" onClick={()=>addToCart(item.id)}>Add to cart</button> */}
                            </div>
                            <button className="buybtn">Buy now</button>
                        </div>
        ))}
      </div>
    </>
  );
}