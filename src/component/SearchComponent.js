import Header from "../Header"
import { useState } from "react";
import {Table} from 'react-bootstrap';
export default function SearchComponent() {

    const[data,setData] = useState([]);

    async function searchById(name){

        let result=  await fetch(`http://localhost:9091/getProductByName/${name}`);
        result = await result.json();
        setData(result);


    }
    return (
        <>
            <Header/>
            <br/>
            <div className="col-sm-4 offset-4">
                <input type="text" onChange={(e)=>searchById(e.target.value)} className="form-control" />
                <br/>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((product, i) =>
                            <tr key={i}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td><img style={{width:'50px'}} src={product.file_path}/></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            </div>
        </>

    )
}