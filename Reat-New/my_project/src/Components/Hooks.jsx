import { useState } from "react";
export const User=()=>{

    const [cartCount, setCartCount] = useState(0);
    const add=()=>setCartCount(cartCount+1)

    return(
        <>
        <h1>Add To Cart :{cartCount}</h1>
        <button onClick={add}>Add to cart</button>
        </>
    )
}





