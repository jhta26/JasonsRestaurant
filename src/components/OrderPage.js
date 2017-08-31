
import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';
import OrderPageLayout from './OrderPageLayout'
import './OrderPageLayout.story.css'
import Nav from './Nav'
import MenuComponent from './MenuComponent'
import OrderFormComponent from './OrderFormComponent'
import OrderTableComponent from './OrderTableComponent'
import Footer from './Footer'
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent'



export default function OrderPage({
  menuItems
  ,orderItems
  ,customerInfo
  ,onAddItem
  ,onSubmitOrderForm
  ,onCloseOrderSuccessMessage}){
  return(
  <div className='OrderPageLayout'>
  <OrderPageLayout> 
  <Nav/>
  <MenuComponent items={menuItems} onAddItem={onAddItem}/>
  <OrderTableComponent items={orderItems} />
  {customerInfo?<OrderSuccessMessageComponent customerInfo={customerInfo} onClose={onCloseOrderSuccessMessage}/>:
  <OrderFormComponent onSubmitForm={onSubmitOrderForm} />}
  <Footer/>
  </OrderPageLayout>
  </div>
 )
}