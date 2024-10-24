import About from "../About/About";
import Cart from "../Cart/Cart";


const CartContainer = ({handleIsActiveState, isActive, selectedProducts}) => {
    return (
        <div className="mt-7  ">
            <h1 className="text-2xl">CartContainer.jsx</h1>

            <div className="flex justify-around mt-6">
                <button onClick={()=>handleIsActiveState("cart")} className={`${isActive.cart? "bg-blue-500 p-2 px-4 rounded-sm text-white" : 'btn'}`}>Cart</button>
                <button onClick={()=>handleIsActiveState("about")} className={`${isActive.cart? "btn" : "bg-blue-500 p-2 px-4 rounded-sm text-white"}`}>About</button>
            </div>

            {
                isActive.cart? <Cart selectedProducts={selectedProducts}/> 
                :<About />
            }
            
        </div>
    );
};

export default CartContainer;