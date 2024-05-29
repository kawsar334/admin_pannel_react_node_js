import { useEffect, useState } from "react"
import "./createproduct.scss"
import axios from "axios";
import { sidebarItems } from "../../data";
import { message } from "antd";
import { useNavigate } from "react-router-dom";


const CreateProduct = () => {
  const navigate =useNavigate()
  const [inputs, setInputs] = useState({});
  const [sizes, setSizes] = useState(null);
  const [colors, setColors] = useState(null);
  const [files, setFiles] = useState(null)
  const [category, setCetegory] = useState([]);
  const [active, setActive] = useState("")


  // handling active 
  const handleActive = (e) => {
    if (e.name === category.category) {
      setActive(e.name)
    } else {
      setActive("")
    }
  }

  // handling multiple input using onchange 
  const handleInputs = (e) => {
    setInputs((prev) => {
      return {
        ...prev, [e.target.name]: e.target.value
      }
    })
  }

  //handling file using onchange event 
  const handleFileChange = (e) => {
    const data = Array.from(e.target.files);
    setFiles(data);
  }

  // sending data to backend 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const lists = await Promise.all(Object.values(files).map(async (file) => {
      data.append("file", file);
      data.append("upload_preset", "ecommerce");
      const res = await axios.post("https://api.cloudinary.com/v1_1/dmvmzwqkw/upload ", data)
      return res.data.url
    }))

    try {

      const res = await axios.post(`/product/createproduct`, { ...inputs, sizes, colors, images: lists, ...category });
      if(res.data){
        message.success("product created succesfully ");
        navigate("/products")
      }
    } catch (err) {
      message.error("something went wrong !")
    }
  }



// handling category
  const handleCate = (e) => {
    setCetegory((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <div className="addproduct">
      <div className="addproductwrapper">
        <h3 className="text-center p-4">Add a New product</h3>
        {files && <div className="uploadimgscontainer">
          {files && files.map((file) => (

            <img src={URL.createObjectURL(file)} alt="" />
          ))}
        </div>}
        <form className="addproductform" onSubmit={handleSubmit}>
          <div className="formleft">
            <div className="formitem">
              <label htmlFor="img" className="btn btn-secondary text-white">
                upload file
                <input required type="file" name="img" id="img" style={{ display: "none" }} multiple onChange={handleFileChange} />
              </label>
            </div>
            <div className="formitem">
              <label id="" htmlFor="title">title</label>
              <input required type="text" name="title" placeholder="Enter a product title " onChange={handleInputs} />
            </div>
            <div className="formitem">
              <label id="description" htmlFor="description">description</label>
              <input required type="text" name="description" placeholder="Enter a description " onChange={handleInputs} />
            </div>
            <div className="formitem">
              <label id="price" htmlFor="price">price</label>
              <input required type="number" min={1} name="price" placeholder="product price " onChange={handleInputs} />
            </div>
            <div className="formitem">
              <label id="stock" htmlFor="stock">stock</label>
              <input required type="number" min={1} name="stock" placeholder="stock count Number " onChange={handleInputs} />
            </div>
          </div>
          <div className="formright">

            <div className="formitem">
              <label id="brand" htmlFor="brand">brand</label>
              <input required type="text" name="brand" placeholder="enter a brand " onChange={handleInputs} />
            </div>
            <div className="formitem">
              {/* <label id="category" htmlFor="category">category</label>
              <input required type="text" name="category" placeholder="Enter categories using comma , " onChange={(e) => setCetegory(e.target.value.split(","))}  /> */}
              <label htmlFor="category">select multiple category..</label>
              <select name="category" id="category" onChange={handleCate} >
                {
                  sidebarItems.map((c) => {
                    return (
                      <option onClick={() => handleActive(c)} value={c?.name} style={active === c?.name ? { background: "red" } : { background: "white" }}  ><span>{c?.id}.</span> {c?.name}</option>
                    )
                  })
                }
              </select>

            </div>
            <div className="formitem">
              <label id="colors" htmlFor="name">colors</label>
              <input required type="text" name="colors" placeholder="Enter colors using comma , " onChange={(e) => setColors(e.target.value.split(","))} />
            </div>
            <div className="formitem">
              <label id="sizes" htmlFor="sizes">sizes</label>
              <input required type="text" name="sizes" placeholder="Enter sizes using comma , " onChange={(e) => setSizes(e.target.value.split(","))} />
            </div>
            <div className="formitem">
              <button>submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateProduct

