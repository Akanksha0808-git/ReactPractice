// import React, { useState } from "react";

// function ReactApp() {
//   const [cards, setCards] = useState([
//     { name: "BTC", price: 250, quantity: 0 },
//     { name: "RC", price: 50, quantity: 0 },
//     { name: "CNH", price: 650, quantity: 0 },
//   ]);

//   const [grandTotal, setGrandTotal] = useState(0);

//   const handleQuantityChange = (index, change) => {
//     const updatedCards = [...cards];
//     updatedCards[index].quantity += change;
//     updatedCards[index].quantity = Math.max(0, updatedCards[index].quantity);
//     setCards(updatedCards);
//   };

//   const handleAddClick = () => {
//     const total = cards.reduce((acc, card) => {
//       return acc + card.quantity * card.price;
//     }, 0);
//     setGrandTotal(total);
//   };

//   return (
//     <div >
//       <div className="parent">
//         {cards.map((card, index) => (
//           <div  className="cardstyle" key={index}>
//             <div>Name: {card.name}</div>
//             <div>Price: ${card.price}</div>
//             <div>
//             <button onClick={handleAddClick}>Add</button>
//               <button onClick={() => handleQuantityChange(index, 1)}>Qty</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div>
        
//       </div>
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>Card Name</th>
//             <th>Qty</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cards.map((card, index) => (
//             <tr key={index}>
//               <td>{card.name}</td>
//               <td>{card.quantity}</td>
//               <td>${card.quantity * card.price}</td>
//             </tr>
//           ))}
//           <tr>
//             <td></td>
//             <td></td>
//             <td>Grand Total: ${grandTotal}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ReactApp;

import React, { useState } from 'react';
import "../src/ReactAppStyle.css"
function App() {
  const [items, setItems] = useState([
    { name: 'BTC', price: 250, quantity: 0 },
    { name: 'RC', price: 50, quantity: 0 },
    { name: 'CNH', price: 650, quantity: 0 },
  ]);

  const [grandTotal, setGrandTotal] = useState(0);

  const handleQtyChange = (index, newQuantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = newQuantity;
    setItems(updatedItems);
  };

  const handleAddToCart = () => {
    const total = items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setGrandTotal(total);
  };

  return (
    <>
    <div className='parent'>
      <h1>certain Task</h1>
      <div className='child1'>
      {items.map((item, index) => (
        <div  key={index}>
          <div className='child' style={{ backgroundColor: item.name === 'BTC' ? 'pink' : item.name === 'RC' ? 'purple' : 'hotpink' }}>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleQtyChange(index, item.quantity + 1)}>Quantity</button>
            <p>Quantity: {item.quantity}</p>
            <button onClick={handleAddToCart}>Add</button>
          </div>
        </div>
      ))}
</div>
<div className='child2'>
      <h2>Cart</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Card Name</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">Grand Total:</td>
            <td>${grandTotal}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </>
  );
}

export default App;

