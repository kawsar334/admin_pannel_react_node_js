import { NavLink, useLocation } from "react-router-dom"
import "./productdetails.scss"
import ApiCalls from "../../apicalls/productApi"
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from 'timeago.js';

const ProductDetails = () => {
  const id = useLocation().pathname.split("/")[2];
  const [imgSrc, setImgSrc] = useState(null)
  const [open, setOpen ] = useState(false)
  const [user, setUser] = useState({})

  const {data, loading, error} = ApiCalls(`/product/find/${id}`);

useEffect(()=>{
  const getUserInfo =async()=>{
    try{

      const res = await axios.get(`/user/find/${data?.product?.userId}`)
      console.log(res.data.user)
      setUser(res.data.user)
    }catch(err){
      console.log(err);
    }
  }
  data?.product?.userId && getUserInfo()

},[data?.product?.userId])

  // handling img slider
  const handleslide= (i)=>{
    setImgSrc(i);
    setOpen(!open)
  }
  return (
    <div className="productdetails">
      <div className="productdetailswrapper">
        {open &&
       <div className="popupimg">
         <img src={imgSrc} alt="Loading..." />
         <span onClick={()=>setOpen(!open)}>x</span>
       </div>
        }
        {data?.product?.images.length >0 &&<div className="productdetailsImgcontainer">
          {data?.product?.images?.map((i)=>(
          <img src={i} alt="product image..."  key={i} onClick={(e)=>handleslide(i)}/>
          ))}
      </div>}
      <div className="productdetailscontent">
        <span><b>Name:</b>this is product</span>
          <span><b>Name:</b>{data?.product?.title}</span>
          <span><b>createdBy:</b><NavLink to={`/user/${data?.product?.userId}`} style={{ color: "blue" }}>{user?.name}</NavLink></span>
          <span><b>color:</b>{data?.product?.colors?.map((c)=>{return c+","})}</span>
          <span><b>category:</b>{data?.product?.category?.map((c)=>{return c+","})}</span>
          <span><b>InStock:</b>Yes</span>
          <span><b>Created At :</b>{format(data?.product?.createdAt)}</span>


          <p><b>description:</b>{data?.product?.description ||"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolorum, praesentium sed inventore blanditiis vitae, culpa assumenda possimus laudantium quis similique? Numquam eius quia voluptatum, earum deleniti saepe sint accusantium?"}</p>
          <button><NavLink to={`/product/edit/${data?.product?._id}`}>Edit product</NavLink></button>

      </div>
      </div>
    </div>
  )
}

export default ProductDetails