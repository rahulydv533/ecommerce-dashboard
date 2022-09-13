import { useEffect, useState } from "react";
import Header from "../Header";
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function ProductList() {

    const [data, setData] = useState([]);

    useEffect(() => {

        getProductList();

    }, [])

    async function getProductList() {
        let result = await fetch("http://localhost:9091/getProducts");
        result = await result.json();
        setData(result);
    }

    async function deleteProduct(id) {
        let result = await fetch(`http://localhost:9091/delete/${id}`, {
            method: "DELETE"
        });
        result = await result.text();
        console.warn(result);
        getProductList();
    }

    return (
        <>
            <Header />
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
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
                                </td>
                                <td>
                                    <Link to={`update/${product.id}`}><span className="update">Update</span></Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}