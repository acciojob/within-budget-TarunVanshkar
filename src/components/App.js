import React, { useState } from "react";
import './../styles/App.css';

const itemList = [
  { item: 'Apple', price: 20 },
  { item: 'Banana', price: 10 },
  { item: 'Neutella', price: 30 },
  { item: 'Razor', price: 5 },
  { item: 'CornFlakes', price: 15 },
  { item: 'Sound Bar', price: 50 },
  { item: 'Iphone', price: 80 },
]
const App = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Enter your budget to check available items:</h1>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <table>
        <thead>
          <th>Items you can buy are in Green color</th>
        </thead>
        <tbody>
          {
            itemList.map((product) => {
              return (
                <tr>
                  <td>{product.item}</td>
                  <td style={{ color: product.price > value ? 'red' : 'green' }}>
                    {product.price}
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App

// {
//   itemList.map((element, index) => {
//     if(element.price <= value){
//       return <li key={index}>{element.item}</li>
//     }
//     else{
//       return <li key={index}>{element.item}</li>
//     }
//   })
// }