import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFormik } from "formik";
import "./test.css"

import { data } from './data';

const Test = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 3;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = products.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(products.length / recordPerPage);
    const numbers = [...Array(nPage + 1).keys()]?.slice(1)
    // const DATA = useSelector((state)=>state.cart)


    const bubble = (arr)=>{
        for(let i= 0; i<arr.length ; i++){
            for(let j=0; j<arr.length-1; j++){
                if(arr[j]>arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1]
                    arr[j+1] = temp                    
                }
            }
        }
        return arr
    }
       bubble([3, 5,1, 4, 2])
 

    // getting data from fake api 
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getData()

    }, [])
    // 
    const handleNext = () => {
        if (currentPage < data.length) {
            setCurrentPage(currentPage + 1)
        }

    }
    // 
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    // handle change number

    const changeNumber = (i) => {
        setCurrentPage(i)

    }


    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: "",

        },
        onsubmit: (values) => {
            console.log(JSON.stringify(values, null, 2))
        }
    })
    const { email, password, username } = formik.values

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", flexWrap: "wrap", gap: "30px" }}>

            {records?.map((item) => (
                <>
                    <h1 style={{ color: "red" }}>{item.id}{item.title.slice(0, 4)}..</h1>
                    <img src={item.image} alt="" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                </>
            ))}

            <button onClick={handleNext}>next</button>
            {numbers.map((i) => (
                <>
                    <button onClick={() => changeNumber(i)} className={currentPage === i && "active"}>{i}</button>
                </>
            ))}
            <button onClick={handlePrev}>prev</button>



            {/* {products.map((item) => (
                <>
                    <NavLink to={`/product/${item?.id}`}>
                        <span style={{ background: "red", color: "white", padding: "5px" }}>{item.id}</span>
                        <img src={item?.image} alt="Loading..." width={100} />
                    </NavLink>
                </>
            ))} */}
        </div>
    )
}

export default Test