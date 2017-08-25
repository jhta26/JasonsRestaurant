import React from 'react'

export default function OrderTableComponent({item}){
	
	return(
		<table className="striped grey-text text-darken-4 OrderTableComponent">
                  <thead>
                     <tr>
                        <th>Item</th>
                        <th></th>
                        <th className="right-align">Price</th>
                     </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td></td>
                  <td>{item.name}</td>
                  <td className='right-align'>{item.price}</td>
                  </tr>
                  </tbody>
                  <tfoot>
                     <tr>
                        <td></td>
                        <td className="right-align">Subtotal</td>
                        <td id="subtotal" className="right-align">{item.price}</td>
                     </tr>
                     <tr>
                        <td></td>
                        <td className="right-align">Tax</td>
                        <td id="tax" className="right-align">{(item.price*.10).toFixed(2)}</td>
                     </tr>
                     <tr>
                        <td></td>
                        <td className="right-align">Total</td>
                        <td id="total" className="right-align">{item.price + (item.price*.10)}</td>
                     </tr>
                  </tfoot>
               </table>
	
)
}
