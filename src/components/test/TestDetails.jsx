import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AddToCart, removeCart } from '../../redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'



const TestDetails = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const id = useLocation().pathname.split("/")[2];
    const dispatch = useDispatch()
    const data = useSelector((state) => state.cart);
  



// 
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getData()

    }, [id])



    const handleAddToCart = () => {
        const { id, title, price, } = product
        dispatch(AddToCart({ id, title, price, quantity }))

    }


    // handling quantity 
    const handleQuantitiy = (operation) => {
        if (operation === "i") {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1);
        }
    }


    return (
        <div>
            <button
                style={{
                    padding: "10px",
                    width: "200px",
                    background: "teal",
                    color: "white",
                    cursor: "pointer"
                }}
                onClick={handleAddToCart}
            >
                Add product 
            </button>
            <button onClick={() => handleQuantitiy("i")} style={{ padding: "5px", margin: "10px", cursor: "pointer", background: "pink", color: "white", }}>+</button>
            <button style={{ padding: "5px", margin: "10px", cursor: "pointer", background: "red", color: "white", }}>{quantity}</button>
            <button onClick={() => handleQuantitiy("d")} disabled={quantity<=1} style={{ padding: "5px", margin: "10px", cursor: "pointer", background: "blue", color: "white", }}>-</button>
            <div>
                {product?.title}
            </div>
            <br />
            <img src={product?.image} alt="" width={200} />
            {/* <br /> */}
            <p>price {product.price}</p>


            {/* cart section */}
            <div>
                <h1>your cart {data.quantity}</h1>
                {data?.products && data?.products.map((item)=>(
                    <>
                        <h1>{item?.id}.<b>___</b> {item?.title} </h1>
                        <button onClick={()=>dispatch(removeCart(item?.id))}>Remove</button>
                    </>
                ))}
                
            </div>


        </div>
    )
}

export default TestDetails