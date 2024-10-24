
import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import CartContainer from './components/CartContainer/CartContainer'
import NavBar from './components/NavBar/NavBar'




function App() {

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })

  const [selectedProducts, setSelctedProducts] = useState([])


  const handleSelectedProduct = (product) => {
    const isexist = selectedProducts.find((p) => p.id === product.id)

    if (isexist) {
      alert("er add kora jabe nah")
    } else {
      const newProducts = [...selectedProducts, product];
      setSelctedProducts(newProducts);
    }

  }
  



  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart"
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "about"
      })
    }
  }


  return (
    <>
      <NavBar selectedProducts={selectedProducts} />

      <div className='flex justify-around'>
        <AllProducts
          handleSelectedProduct={handleSelectedProduct} />

        <CartContainer
          handleIsActiveState={handleIsActiveState}
          isActive={isActive} 
          selectedProducts={selectedProducts}
          />
      </div>



    </>
  )
}

export default App
