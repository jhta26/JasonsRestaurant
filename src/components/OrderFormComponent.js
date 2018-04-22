import React from 'react'

export default class OrderFormComponent extends React.Component{
	
constructor(props){
   super(props)
   this.state={
      showErrorMess: false
   }
}
  
  _handleSubmit = event => {
      event.preventDefault()
      const {customerInfo, onSubmitForm} = this.props
      const $form = event.target
      const name= $form.name.value.trim()
      const number = $form.phone.value.trim()
      const address = $form.address.value.trim()
      if(name.length==0&&number.length==0&&address.length==0){
         this.setState({
            showErrorMess: true
         })
      }else{
         onSubmitForm({name,number,address})
      }
      }


render(){

	return(
		
               <form onSubmit={this._handleSubmit}>
                  <div className="Input input-field ">
                     <i className="material-icons prefix small">account_circle</i>
                     <input id="name" type="text" placeholder="Name"></input>
                     
                  </div>
                  <div className="Input input-field ">
                     <i className="material-icons prefix small">phone</i>
                     <input id="phone" type="text" placeholder="Phone"></input>
                     
                  </div>
                  <div className="Input input-field">
                     <i className="material-icons prefix small">address</i>
                     <input id="address" type="text" placeholder="Address"></input>
                     
                  </div>

               <div className="col s12 offset-s4">
                  <button id="placeOrder" className="waves-effect waves-light btn-large center-align pink lighten-1" type="submit" name="placeOrder">PLACE ORDER</button>
                  {this.state.showErrorMess==true?<div>Try Again, Not Enough Info</div>:null}
               </div>
            </form>
	
      )}
   
   }




