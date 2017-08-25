
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

export default function OrderPage(items,item,CustomerInfo){
  
  <OrderPageLayout> 
  <Nav/>
  <MenuComponent items={items}/>
  <OrderTableComponent item={item} />
  <OrderTableForm CustomerInfo={CustomerInfo} />
  <Footer/>
  </OrderPageLayout>
 
)}