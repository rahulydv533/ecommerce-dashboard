import Header from "../Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    async function login(){
        let item={userId,password};
        let result = await fetch("http://localhost:9091/login",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        navigate("/add");
    }

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add");
        }
    })
    return (
        <>
            <Header />

            <div className="col-sm-4 offset-4">
                <br/>
                <input type="text" placeholder="Enter userId" onChange={(e) => setUserId(e.target.value)} className="form-control" /><br /><br />
                <input type="text" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} className="form-control" /><br /><br />
                <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
        </>
    )

}

export default Login;