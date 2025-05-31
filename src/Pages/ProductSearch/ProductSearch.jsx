import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductSearch = () => {

    const[products,setProducts] = useState([])
    const[category,setCategory] = useState("")
    const[formData,setFormData] = useState({
        productId:"",
        productName:"",
        productCategory:""
    })

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get("https://dummyjson.com/products");
            setProducts(response.data.products);
            console.log(response.data.products);
        }
        fetchData();
    },[])

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})      
    }

    const submitChange=async(e)=>{
        e.preventDefault();
        console.log("Form submitted with data:", formData);
            const response = await axios.get(`https://dummyjson.com/products/${formData.productId}`);
            const sample=[response.data];
            setProducts(sample);
            
            console.log(sample);
    }
    return(
        <div>
            <h1>ProductList</h1>
            <form onSubmit={submitChange}>
                <input onChange={handleChange} type="text" name="productId" placeholder="Product-id"/>
                <input onChange={handleChange} type="text" name="productName" placeholder="Product-name"/>
                <select>
                    <option>beauty</option>
                </select>
                <input type="submit" placeholder="Submit"/>
            </form>
            <table>
                <thead>
                <tr>
                    <td>Product-id</td>
                    <td>Product Name</td>
                    <td>Product Details</td>
                </tr>
                </thead>
                <tbody>
                {
                    products?.map((product,index)=>{
                        return(
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default ProductSearch;