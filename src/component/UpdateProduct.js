import { useEffect, useState } from "react";
import Header from "../Header";
import { useParams } from 'react-router-dom'

export default function UpdateProduct(props) {

    const params = useParams();
    const { id } = params;

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");
    const [filePath, setFilePath] = useState("");

    console.log("paramId", id);
    const [data, setData] = useState({});  //TODO: Doubt: when we are not passing default value: useState(), it's throwing error: why?

    useEffect(() => {
        getUpdateProductById();
    },[])

    async function getUpdateProductById() {
        console.log("check");
        let result = await fetch(`http://localhost:9091/getProductById/${id}`);
        result = await result.json();
        console.log("data", result)
        setData(result);
        setName(result.name);
        setFile(result.file_path);
        setDesc(result.description);
        setPrice(result.price);
        setFilePath(result.file_path);
    }

    function updateProductById() {
        let item = { name, desc, price, file, filePath };
        console.log("ItemName",item.name)
        const formData1 = new FormData();
        
        formData1.append("file", item.file);
        formData1.append("name", item.name);
        formData1.append("description", item.desc);
        formData1.append("price", item.price);
        formData1.append("file_path", item.filePath);
        console.log("formdata",formData1.entries())
        console.log("Item",item)

        // axios.post("http://localhost:9091/insertProduct", formData).then((result) => {
        //     console.log("let see result", result.data);
        // });

        fetch(`http://localhost:9091/updateProductById/${id}`, {
            method: 'POST',
            body: formData1
        }).then(response => response.json()).then((result) => {
            console.log("See response", result)
           
        });
    }



    return (
        <>
            <Header />

            <div className="col-sm-4 offset-4">
                <input type="text" defaultValue={data.name} className="form-control" onChange={(e) => setName(e.target.value)}/><br/>
                <input type="text" defaultValue={data.description} className="form-control" onChange={(e) => setDesc(e.target.value)}/><br/>
                <input type="text" defaultValue={data.price} className="form-control" onChange={(e) => setPrice(e.target.value)}/><br/>
                <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])}/><br/>
                <img style={{width:50}} src={data.file_path} />
                <button className="btn btn-success" onClick={updateProductById}>Update</button>
            </div>
        </>
    )
}
