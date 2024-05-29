import React, { useEffect, useState } from 'react'
import "./product.scss"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import ProductApi from '../../apicalls/productApi'
import Loader from '../../components/loader/Loader'
import { message } from 'antd'

const Product = () => {
  const { data, error, loading } = ProductApi(`/product/`)

// deleting single product from database
  const handleDelete =async (id)=>{
    if(window.confirm("Are you sure delete this product?")){

      try{
        const res = await axios.delete(`/product/${id}`)
        
        console.log(res.data);
        if(res.data.success){
          message.success(res.data.message)
        }
        
      }catch(err){
        console.log(err);
      }
    }
  }
  return (
    <div className="products">
     <div className='productstop'>
        <h1><span className='text-danger'>{data?.products?.length < 10 ? `0${data?.products?.length}` : data?.products?.length}</span> Prodducts </h1>
      <NavLink to="/addproduct" className="btn btn-primary">Add a New product</NavLink>
     </div>

    <div className='productcontainer'>
      <table className="table ">
        <thead>
          <tr className=''>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">InStock</th>
            <th scope="col" colSpan={2}>Handle</th>

          </tr>
        </thead>
        <tbody>                
            {data?.products && data?.products?.map((item)=>( <tr>
            <th scope="row">{item?._id}</th>
            <th scope="row">{item?.title}</th>
            <td >
                {loading ?<Loader/>:<NavLink to={`/product/${item?._id}`}>
                {<img src={item?.images[1]||"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" className='listimg ' />}
              </NavLink>}
            </td>
            <th scope="row">Yes</th>
              {loading ? <Loader/>:<td>
                <NavLink to={`/product/edit/${item?._id}` }className="btn btn-primary"><i className="fa-regular fa-pen-to-square"></i></NavLink>
               <button className='btn btn-danger' onClick={()=>handleDelete(item?._id)}><i className="fa-solid fa-trash"></i></button></td>}
         </tr>)) }
        </tbody>
      </table>
     </div>
    </div>
  )
}

export default Product