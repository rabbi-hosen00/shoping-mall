
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

  const [price, setPrice] = useState(500)

 const handleIncreasePrice =(pr)=>{
  setPrice(price + pr)
 }

 const handleDecreasePrice =(id)=>{
  const product = selectedProducts.find((p) => p.id == id)
  setPrice(price - product.price)
 }


  const handleDelete = (id) => {
    handleDecreasePrice(id)
    const newProduct = selectedProducts.filter((p)=>(
      p.id !== id
    ))
    setSelctedProducts(newProduct)
  }



  const handleSelectedProduct = (product) => {
    const isexist = selectedProducts.find((p) => p.id === product.id)

    if (isexist) {
      alert("er add kora jabe nah")
    } else {
      handleIncreasePrice(product.price)
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
      <NavBar 
      selectedProducts={selectedProducts} 
      price={price}/>

      <div className='flex justify-around'>
        <AllProducts
          handleSelectedProduct={handleSelectedProduct} />

        <CartContainer
          handleIsActiveState={handleIsActiveState}
          isActive={isActive}
          selectedProducts={selectedProducts}
          handleDelete={handleDelete}
        />
      </div>



    </>
  )
}

export default App
