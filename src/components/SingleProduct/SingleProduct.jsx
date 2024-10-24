import './SingleProduct.css'

const SingleProduct = ({ product, handleSelectedProduct }) => {

    const {  name, image, description, price, category, isFeature } = product;


    return (
        <div className="card pb-3  ">
            <img className='w-full' src={image}></img>
            <h2 className='pb-2 pt-2'>{name}</h2>
            <p>{description}</p>
            <div className='mt-2'>
                <p>${price}</p>
                <p>{category}</p>
                <p>{isFeature ? "feature category" : "N/A"}</p>

            </div>
            <button onClick={() => handleSelectedProduct(product)} className='border-solid mt-2 border-2 px-2 border-stone-600'>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;







