import Products from './Products';

function App() {
  

  return (
    <>
     <Products 
      name="Tennis Ball" 
      description="Set of 10 tennis balls" 
      price="10.00" 
      stock="Yes" 
     />
     <Products 
      name="Apple Laptop" 
      description="MacBook Pro" 
      price="3000.00" 
      stock="No" 
     />
     <Products 
      name="Windows Laptop" 
      description="Asus Tuf Gaming Laptop" 
      price="2000.00" 
      stock="yes" 
     />
     <Products 
      name="Apple iPhone" 
      description="Worlds best mobile device" 
      price="3000.00" 
      stock="Yes" 
     />
    </>
  )
}

export default App
