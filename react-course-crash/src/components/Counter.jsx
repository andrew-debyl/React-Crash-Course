import React, { useState } from "react";

function Counter() {
    {/* const [cart, setCart] = useState({item: "apple", quantity: 10})
    
    function removeApple(){
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity - 1,
        }))
    }

    function addApple(){
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }

    return <>
        <div>
            <button onClick={removeApple}>-</button>
            <h1>{cart.quantity} {cart.item}</h1>
            <button onClick={addApple}>+</button>
        </div>
</> */}


    const [arr,setArr] = useState([])

    function addPlus(){
        setArr(prev => [...prev, "+"])
    }

    function addMinus(){
        setArr(prev => [...prev, "-"])
    }


    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div>
    )



}

export default Counter;