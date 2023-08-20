import { useState } from "react";
import packContext from "./create";

const PackState = (props) => {
    const [data, setData] = useState(null)
    const change = (image, title, price,id) => {
        setData({
            image,
            title,
            price,
            id
        })
    }
    return (
        <packContext.Provider value={{ change, data }}>
            {props.children}
        </packContext.Provider>
    )
}
export default PackState;