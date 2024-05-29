import { NavLink, useLocation, useNavigate } from "react-router-dom"
import "./editProduct.scss"
import ApiCalls from "../../apicalls/productApi";
import { format } from 'timeago.js';
import Loader from "../../components/loader/Loader";
import { useState } from "react";
import axios from "axios";
const EditProduct = () => {
  const navigate = useNavigate()

  const id = useLocation().pathname.split("/")[3];
  const { data, error, loading } = ApiCalls(`/product/find/${id}`);
  const product = data?.product;
  const [inputs, setInputs] = useState({});
  const [sizes, setSizes] = useState(null);
  const [colors, setColors] = useState(null);
  const [files, setFiles] = useState(null)
  const [category, setCetegory] = useState(null)


  // handling file using onchange event
  const handleFile = (e) => {
    const fileData = Array.from(e.target.files)
    setFiles(fileData)
  }


  // handling multiple inputs 
  const handleInputs = (e)=>{
    setInputs((prev)=>{
      return{
        ...prev, [e.target.name]:e.target.value
      }
    })

  }


// sending data to database
  const handleUpdate =async (e)=>{
    e.preventDefault()

    const data = new FormData();
    const lists = await Promise.all(Object.values(files).map(async(file)=>{
      data.append("file", file);
      data.append("upload_preset", "ecommerce");
      const res = await axios.post("https://api.cloudinary.com/v1_1/dmvmzwqkw/upload ", data)
      return res.data.url
    }))
  try{
    const res = await axios.put(`/product/${id}`, {sizes, images:lists, ...inputs, colors, sizes, category});
    console.log(res.data)
    navigate("/")


  }catch(err){
    console.log(err);
  }

  }

  return (
    <div className="editproduct">
      <h1>Update product</h1>
      {loading ? <Loader /> : <div className="editproductwrapper">
        <div className="editproductleft">
          <img src={product?.images[0] || "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" />
          <div className="productdetails">
            <span><b>Title:</b>{product?.title}</span>
            <span><b>createdBy:</b><NavLink to={`/user/${product?.userId}`} style={{ color: "blue" }}>{product?.userId}</NavLink></span>
            <span><b>price:</b>${product?.price}</span>
            <span><b>category:</b>{product?.category?.map((i) => (<span>{i + ","}</span>))}</span>
            <span><b>inStock:</b>{product?.stock}</span>
            <span><b>size:</b>{product?.sizes?.map((i) => {
              return i ? i + "," : ""
            })}</span>
            <span><b>Colors:</b>{product?.colors?.map((i) => {
              return <span style={{ color: i, marginLeft: "10px" }}>{i}</span>
            })}</span>
            <span><b>Created at:</b>{format(product?.createdAt)}</span>
            <span><b>Description:</b>{product?.description}</span>
          </div>
        </div>
        {/* right section start here */}
        <div className="editproductright">
          <form action="" className="productform" onSubmit={handleUpdate}>
            <div className="formleft">
              <div className="formitem">
                <h3>Edit product</h3>
              </div>

              {files && <div className="formitem image_container  my-3">
                {files.map((file) => (

                  <img src={URL.createObjectURL(file)} alt="Loading..." />
                ))}
              </div>}
              <div className="formitem">
                <label htmlFor="img" className="btn btn-secondary d-flex">
                  Upload imag
                  <input onChange={handleFile} required type="file" id="img" style={{ display: "none" }}  multiple />
                </label>
              </div>
              <div className="formitem">
                <label htmlFor="title">title</label>
                <input  onChange={handleInputs} required type="text" name="title" id="title" placeholder="enter title" />
              </div>
              <div className="formitem">
                <label htmlFor="description">description</label>
                <input  onChange={handleInputs} required type="text" id="description" name="description" placeholder="enter description" />
              </div>
              <div className="formitem">
                <label htmlFor="sizes">sizes</label>
                <input onChange={(e) => setSizes(e.target.value.split(","))} required type="text" id="sizes" name="sizes" placeholder="enter sizes" />
              </div>
            </div>
            <div className="formright">
              <div className="formitem">
                <label htmlFor="colors">colors</label>
                <input onChange={(e) => setColors(e.target.value.split(","))} required type="text" id="colors" name="colors" placeholder="enter colors" />
              </div>
              <div className="formitem">
                <label htmlFor="category">category</label>
                <input  onChange={(e)=>setCetegory(e.target.value.split(","))} required type="text" id="category" name="category" placeholder="enter category" />
              </div>
              <div className="formitem">
                <label htmlFor="stock">stock</label>
                <input  onChange={handleInputs} required type="Number" id="stock" placeholder="enter stock" />
              </div>
              <div className="formitem">
                <label htmlFor="price">price</label>
                <input onChange={handleInputs} required type="Number" id="price" placeholder="enter price" />
              </div>
              <div className="formitem">
            </div>
            <button className="btn btn-primary m-3 ">Update</button>
            </div>
          </form>
        </div>
        {/* right section end here */}
      </div>}
    </div>
  )
}
export default EditProduct