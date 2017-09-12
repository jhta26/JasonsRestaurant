import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import OrderPage from './components/OrderPage'
import getMenuItems from './request/getMenuItems'
export default class App extends Component{

state={
	menuItems: null,
	orderItems:[],
	customerInfo:null
}
componentDidMount(){
	getMenuItems()
	.then(menuItems=>{ 
		this.setState({
		menuItems
		})
	}).catch(error=>console.log(error))
		
		}	

render() {
    return (
      <OrderPage
        menuItems={this.state.menuItems}
        orderItems={this.state.orderItems}
        customerInfo={this.state.customerInfo}
        onAddItem={this._addItem}
        onSubmitOrderForm={this._submitOrderForm}
        onCloseOrderSuccessMessage={this._onCloseOrderSuccessMessage}
      />
    );
  }
// function addItem(itemId){
//   orderItems.push(menuItems.find(item=>item.id===itemId))
//   render()
// }


_addItem = itemId => {
  this.setState(prevState=>{
  	return{
  		orderItems:[
  		...prevState.orderItems,
  		prevState.menuItems.find(item=>item.id===itemId)
  		]
  	}

  })

}


_submitOrderForm=({name,number,address})=>{
this.setState(
	{customerInfo:{name,number,address}}
)

}

// function onCloseOrderSuccessMessage(){
//   customerInfo=null
//   render()
// }
_onCloseOrderSuccessMessage=()=>{
  this.setState(
  	{
  	customerInfo: null,
  	orderItems:[]
	}
)
}

	


}






