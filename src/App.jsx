import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// function App() {
//   const [counter, setCounter] = useState(0); // Initialize counter to 0

//   // Function to increment the counter up to 20
//   const addValue = () => {
//     if (counter < 20) {
//       setCounter(counter + 1);
//     } else {
//       console.log("Counter cannot exceed 20.");
//     }
//   };

//   // Function to decrement the counter but not below 0
//   const removeValue = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     } else {
//       console.log("Counter cannot be less than 0.");
//     }
//   };

//   return (
//     <>
//       <h1> kumar with  React</h1>
//       <h2>Counter value: {counter}</h2>

//       <button onClick={addValue}>Add value</button>
//       <br />
//       <button onClick={removeValue}>Remove value</button>
//     </>
//   );
// }

// export default App;




function ShoppingCart() {
  // State to track the number of items in the cart
  const [cartItems, setCartItems] = useState(0);

  // Function to add an item to the cart
  const addItem = () => {
    setCartItems(cartItems + 1);
  };

  // Function to remove an item from the cart
  const removeItem = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    } else {
      console.log("No items to remove.");
    }
  };

  // Function to reset the cart
  const resetCart = () => {
    setCartItems(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Shopping Cart</h1>
      <h2>Total Items: {cartItems}</h2>
      
      {/* Buttons for cart operations */}
      <button onClick={addItem} style={{ margin: '10px', padding: '10px 20px' }}>
        Add Item
      </button>
      <button 
        onClick={removeItem} 
        style={{ margin: '10px', padding: '10px 20px' }} 
        disabled={cartItems === 0} // Disable when cart is empty
      >
        Remove Item
      </button>
      <button onClick={resetCart} style={{ margin: '10px', padding: '10px 20px' }}>
        Reset Cart
      </button>
    </div>
  );
}

export default ShoppingCart;


