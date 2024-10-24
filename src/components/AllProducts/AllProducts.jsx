import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";



const AllProducts = ({ handleSelectedProduct }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])


    return (
        <div>
            <h1 className="mt-7 text-2xl">AllProducts.jsx</h1>

            <div className="grid lg:grid-cols-2  justify-between">
                {
                    products.map((product, idx) => <SingleProduct
                        handleSelectedProduct={handleSelectedProduct}
                        key={idx} product={product}></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default AllProducts;