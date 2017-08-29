
import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';
import OrderPageLayout from './OrderPageLayout'
import './OrderPageLayout.story.css'
import Nav from './Nav'
import MenuComponent from './MenuComponent'
import OrderTableForm from './OrderTableForm'
import OrderTableComponent from './OrderTableComponent'
import Footer from './Footer'



export default function OrderPage({menuItems,orderItems,customerInfo, onAddItem}){
  return(
  <div className='OrderPageLayout'>
  <OrderPageLayout> 
  <Nav/>
  <MenuComponent items={menuItems} onAddItem={onAddItem}/>
  <OrderTableComponent items={orderItems} />
  <OrderTableForm CustomerInfo={customerInfo} />
  <Footer/>
  </OrderPageLayout>
  </div>
 )
}