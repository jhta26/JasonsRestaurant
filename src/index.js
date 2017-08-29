import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import OrderPageLayout from './components/OrderPageLayout'
import { storiesOf } from '@storybook/react';
import OrderPage from './components/OrderPage'


function addItem(itemId){
  menuItems.find(item=>(item.id===itemId))
  render()
}

let menuItems=[
{
  name:'Some Item',price:9.99,imagepath:'//via.placeholder.com/300x200',id:1
},
{
  name:'Some Item',price:4.99,imagepath:'//via.placeholder.com/300x200',id:2
},
{
  name:'Some Item',price:8.99,imagepath:'//via.placeholder.com/300x200',id:3
},
{
  name:'Some Item',price:12.99,imagepath:'//via.placeholder.com/300x200',id:4
}
  ]
var orderItems = [
{
  name:'Some Item',price:9.99,imagepath:'//via.placeholder.com/300x200',id:1
},
{
  name:'Some Item',price:4.99,imagepath:'//via.placeholder.com/300x200',id:2
},
{
  name:'Some Item',price:8.99,imagepath:'//via.placeholder.com/300x200',id:3
},
{
  name:'Some Item',price:12.99,imagepath:'//via.placeholder.com/300x200',id:4
}
  ]

var customerInfo = {name:'Jason',number:'248 719 1725',address:'922 Folsom'}

function render(){
ReactDOM.render(  
  <OrderPage 
menuItems={menuItems}
orderItems={orderItems}
customerInfo={customerInfo}
onAddItem={addItem}/>,

document.getElementById('root')
  )
}
render()
