import React, {useEffect} from 'react';
import axios from "axios"
import {useSelector, useDispatch} from 'react-redux';
import {setAction, setProducts} from '../redux/actions/productActions';
import ProductComponent from "./ProductComponent"

const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((e)=>console.log(e));
        dispatch(setProducts(response.data))
    }
    console.log(products);
    useEffect(() => {
        fetchProducts();
    }, [])
    console.log("mmm: ", products)
    return (
        <div className='ui stackable four column grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;