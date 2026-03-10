import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetching = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        // console.log(data);
        setProducts(data.products);
    }
    useEffect(()=>{
        fetching();
    }, []);

    const addToCart = (id) => {

        //add to cart when cartbtn is click
        
        const selectedItem = products.find((item) => item.id == id);
        if (!selectedItem) return;
        
        // check items in cart either it is preseent or not

        setCart((prev) => {
            const existingItem = prev.find((item) => item.id == id);
            if (existingItem) {
                return prev.map((item) =>
                    item.id == id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...selectedItem, quantity: 1 }];
            }
        });
    };
    return (
        <ProductContext.Provider value={{ products, setProducts,cart, addToCart }}>
            {children}
        </ProductContext.Provider>
    )
}