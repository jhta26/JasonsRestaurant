
import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';
import OrderPageLayout from './OrderPageLayout'
import './OrderPageLayout.story.css'
import Nav from './Nav'
import MenuComponent from './MenuComponent'
import OrderTableForm from './OrderTableForm'
import OrderTableComponent from './OrderTableComponent'
import items from './OrderTableComponent'
import CustomerInfo from './OrderTableForm'
import Footer from './Footer'

export default function OrderPage(menuItems,orderItems,customerInfo){
  
  <OrderPageLayout> 
  <Nav/>
  <MenuComponent menuItems={menuItems}/>
  <OrderTableComponent orderItems={orderItems} />
  <OrderTableForm customerInfo={customerInfo} />
  <Footer/>
  </OrderPageLayout>
 
)}