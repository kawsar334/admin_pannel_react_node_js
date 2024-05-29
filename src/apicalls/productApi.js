import axios from "axios";
import { useEffect, useState } from "react"
import { message } from "antd";

const ApiCalls = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const res = await axios.get(url);
                setData(res.data)
                setLoading(false);
                message.success(`${res.data?.message}`);
            } catch (err) {
                console.log(err.response);
                setError(true)
                setLoading(false)
                // message.error("Something went wrong !")
            }
        };
        getData()

    }, [])

    return { data, error, loading }

}


export default ApiCalls