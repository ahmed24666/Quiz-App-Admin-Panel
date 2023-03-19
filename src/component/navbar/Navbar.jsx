import React from 'react'
import "./navbar.scss"
import { useNavigate  } from "react-router-dom";
import RoofingTwoToneIcon from '@mui/icons-material/RoofingTwoTone';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.setItem('login','logedOut')
        navigate("/login")
    }
    return (
        <div className="navbar">
            <div className="first">
                <button onClick={logout}>Logout</button>
            </div>
            <div className="second">
                <div className="item">
                    <NavLink to='/' >
                        <RoofingTwoToneIcon fontSize='medium' style={{ cursor: "pointer" }} />
                    </NavLink>
                    <NavLink to='/' >
                        <h4 className="text">home</h4>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to='/quiz' >
                        <NoteAddOutlinedIcon fontSize='medium' style={{ cursor: "pointer" }} />
                    </NavLink>
                    <NavLink to='/quiz' >
                        <h4 className="text">add quiz</h4>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
