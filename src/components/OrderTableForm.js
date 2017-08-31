import React from 'react'

function OrderTableForm({CustomerInfo, onSubmit}){
	
   // function _handleSubmit(event){
   //    event.preventDefault()
   //    $form = event.target
   //    name= $form.value.name
   //    number = $form.value.number
   //    address = $form.value.number
   // }



	return(
		
               <form className = "OrderTableForm">
                  <div className="Input input-field ">
                     <i className="material-icons prefix small">account_circle</i>
                     <input id="name" type="text"></input>
                     <label>{CustomerInfo.name}</label>
                  </div>
                  <div className="Input input-field ">
                     <i className="material-icons prefix small">phone</i>
                     <input id="phone" type="text"></input>
                     <label>{CustomerInfo.number}</label>
                  </div>
                  <div className="Input input-field">
                     <i className="material-icons prefix small">address</i>
                     <input id="address" type="text"></input>
                     <label>{CustomerInfo.address}</label>
                  </div>

               <div className="col s12 offset-s4">
                  <a id="placeOrder" className="waves-effect waves-light btn-large center-align pink lighten-1" type="submit" name="placeOrder">PLACE ORDER</a>
               </div>
            </form>
	
)
}
export default (OrderTableForm)

