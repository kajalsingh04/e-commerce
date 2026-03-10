import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mainbody.css";
import { ProductContext } from "../context/ProductContext";

export default function MainBody() {
    const{ products, setProducts , addToCart } = useContext(ProductContext);
    // const [products, setProducts] = useState([]);
    const router = useNavigate();

    const token = localStorage.getItem("accessToken");

    const fetching = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        console.log(data);
    }
    useEffect(() => {
         if (!token) {
                  router("/Login");
            }
        fetching()
    }, [])
    return (
        <>
            <div className="mainSection">
                <div className="mainSectionContent">
                    
                    {token && (products.map((item) => (
                        <div className="innerDiv" key={item.id}>
                            <p>{item.brand}</p>
                            <img src={item.thumbnail} alt="image" />
                            <div>
                                <h4>{item.title}</h4>
                                <h5>({item.availabilityStatus})</h5>
                            </div>
                            <div>
                                <h2>₹{item.price}</h2>
                                <button type="submit" className="cartbtn" onClick={()=>addToCart(item.id)}>Add to cart</button>
                            </div>
                            <button className="buybtn">Buy now!</button>
                        </div>
                    )))}
                </div>
            </div>
        </>
    );
}