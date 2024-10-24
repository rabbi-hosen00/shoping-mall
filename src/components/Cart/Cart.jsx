

const Cart = ({selectedProducts,handleDelete}) => {
    
    return (
        <div>
            {
                selectedProducts.map((product,idx)=>(
                    
                    <div key={idx}>
                        <div className="flex items-center ml-3">
                            <img className="w-14" src={product.image}></img>
                            <p>{product.name}</p>
                            <p className="ml-2">{product.price}</p>
                            <button onClick={()=>handleDelete(product.id)} className="bg-red-500 p-1 px-2 ml-2 rounded-sm text-white">Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;