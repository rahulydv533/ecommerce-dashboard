import { useState } from "react";
import Header from "../Header";
//import axios from 'axios';

export default function AddProduct() {

    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState();
    const [file, setFile] = useState();

    async function addProduct() {
        //let item = { name, desc, price, file };

        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("description", desc);
        formData.append("price", price);

        // axios.post("http://localhost:9091/insertProduct", formData).then((result) => {
        //     console.log("let see result", result.data);
        // });

        let result = await fetch("http://localhost:9091/insertProduct", {
            method: 'POST',
            body: formData
        })

        result = await result.json();
        console.log("response", result)   


        // document.getElementById("inputBox").onreset();
        // setName("");
        // setDesc("");
        // setFile("");
        // setPrice("");
    }

    return (
        <>
            <Header />
            <div className="col-sm-4 offset-4" id="inputBox">
                <br />
                <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className="form-control" /><br />
                <input type="text" placeholder="Enter Description" onChange={(e) => setDesc(e.target.value)} className="form-control" /><br />
                <input type="text" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} className="form-control" /><br />
                <input type="file" placeholder="Attach File" onChange={(e) => setFile(e.target.files[0])} className="form-control" /><br />
                <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
            </div>
        </>



    )
}