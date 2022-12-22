import React, { useContext, useState } from 'react'
import LayoutContext from '../context/layout/LayoutContext';
import { useNavigate } from 'react-router-dom'

const AddLayout = () => {
    const context = useContext(LayoutContext);
    const [layout, setLayout] = useState({fname:"", date:"", email:"", phone:""})
    const {addLayouts } = context
    let navigate = useNavigate()

    const handleClic =(e)=>{
        e.preventDefault();
        addLayouts(layout.fname,layout.date, layout.email, layout.phone);
        setLayout({fname: "", date:"", email: "", phone: ""})
        navigate("/Layout2");
    }
    const onChange =(e)=>{
        setLayout({...layout, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <form className="formBody">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Full Name:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" onChange={onChange} value={layout.fname} id="fname" name="fname" aria-describedby="emailHelp" required />
                    </div>
                </div>
                <div className="row">
                     <div className="col-25">
                        <label htmlFor="date" >DOB:</label>
                    </div>
                    <div className="col-75">
                        <input type="date"  placeholder="dd-mm-yyyy" onChange={onChange} value={layout.date} id="date" name="date" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="col-75">
                        <input type="text"  onChange={onChange} value={layout.email} id="email" name="email" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="phone" >Phone Number:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" onChange={onChange} value={layout.phone} id="phone" name="phone" required />
                    </div>
                </div>
                <div className="row">
                    <button type="submit" disabled={layout.fname.length<3 || layout.email.length<5} className="btn btn-primary" onClick={handleClic}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddLayout
