import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import Header from "../Header";

export default function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("user-info")){
            navigate("/add");
        }
    })

    async function getDetails() {
        let item = { name, email, password };
        console.log(item);
        let result = await fetch("http://localhost:9091/insertStudent", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });

        result = await result.json();
        alert(`Your User Id : ${result.userId}`);
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add");

    }

    return (
        <>
            <Header />
            <div className="col-sm-4 offset-4">

                <br />
                <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="form-control" /><br /><br />
                <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className="form-control" /><br /><br />
                <input type="text" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="form-control" /><br /><br />
                <button className="btn btn-primary" onClick={getDetails}>Sign Up</button>
                {/* <button onClick={getDetails()}>Submit</button>  when calling like this, it invokes getDetails method each time we type in text box */}
            </div>
        </>
    )
}