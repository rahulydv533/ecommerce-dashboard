import Header from "../Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Protected(props) {

    const navigate = useNavigate();
    let Cmp = props.cmp;

    // If you want effect to be executed only on first render, you can pass an empty array
    useEffect(() => {
        if (!localStorage.getItem("user-info")) {
            navigate("/register");
        }
    },[])    
    return (
        <div>
            <Cmp />
        </div>
    )
}