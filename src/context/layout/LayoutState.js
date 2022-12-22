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
    const addLayouts = async (fname, date, email, phone) => {
        const response = await fetch(`${host}/api/layouts/addlayout`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ fname, date, email, phone })
        });
        const note = await response.json()
        setLayouts(layouts.concat(note))
    }
    return (
        <LayoutContext.Provider value={{ layouts, getLayouts, addLayouts}}>
            {props.children}
        </LayoutContext.Provider>
    )

}

export default LayoutState