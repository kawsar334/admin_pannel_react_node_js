import { useState } from "react"
import "./cat.scss"
import axios from "axios";
import { message } from "antd";

const Cat = () => {
    const [text, setText] = useState("");


    const handleCat = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/cat/create`, { desc:text })
            console.log(res.data)
        } catch (err) {
            if (err) {
                message.error("something went wrong ")
            } 

            console.log(err.response.data);
        } 
    }
    return (
        <div className="cat">
            <form onSubmit={handleCat}>
                <div className="catitem">
                    <h2>Add Category</h2>
                </div>
                <div className="catitem">
                    <label htmlFor="text">category Name</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}  required placeholder="Enter a category Name.."  />
                </div>
                <div className="catitem">
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}

export default Cat