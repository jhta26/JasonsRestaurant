import React from 'react'
import itemData from './MenuComponent'
export default function OrderTableComponent({items}){
	let subtotal = items.map(a=>a=a.price).reduce((a,b)=>a+b)
   let tax = (subtotal*.10).toFixed(2)
   let total = (parseFloat(subtotal)+parseFloat(tax)).toFixed(2)
	return(
		<table className="striped grey-text text-darken-4 OrderTableComponent">
                  <thead>
                     <tr>
                        <th></th>
                        <th className="right-align">Item</th>
                        <th className="right-align">Price</th>
                     </tr>
                  </thead>
                  <tbody>
                  {items.map(item=><tr key={item.id.toString()}>
                  <td></td>
                  <td className="right-align">{item.name}</td>
                  <td className="right-align">{item.price}</td>
                  </tr>)}
                  </tbody>
                  <tfoot>
                     <tr>
                        <td></td>
                        <td className="right-align">Subtotal</td>
                        <td id="subtotal" className="right-align">${subtotal}</td>
                     </tr>
                     <tr>
                        <td></td>
                        <td className="right-align">Tax</td>
                        <td id="tax" className="right-align">${tax}</td>
                     </tr>
                     <tr>
                        <td></td>
                        <td className="right-align">Total</td>
                        <td id="total" className="right-align">${total}</td>
                     </tr>
                  </tfoot>
               </table>
	
)
}
