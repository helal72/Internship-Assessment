import { useState } from "react";
import LayoutContext from "./LayoutContext";

const LayoutState = (props) => {
    const host = "http://localhost:5000"
    const layoutInitial = []
    const [layouts, setLayouts] = useState(layoutInitial)
    //fetch all notes

    const getLayouts = async () => {
        const response = await fetch(`${host}/api/layouts/fetchalllayout`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        });
        const json = await response.json()
        setLayouts(json)
    }


    //add note
    const addLayouts = async (productName, sku, category, size, color, sDiscription, lDescription, phone, files) => {
        const response = await fetch(`${host}/api/layouts/addlayout`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({productName, sku, category, size, color, sDiscription, lDescription, phone, files})
        });
        const note = await response.json()
        setLayouts(layouts.concat(note))
    }
    return (
        <LayoutContext.Provider value={{ layouts, addLayouts, getLayouts}}>
            {props.children}
        </LayoutContext.Provider>
    )

}

export default LayoutState