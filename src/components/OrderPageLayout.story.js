
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
import itemData from './MenuComponent'
var menuItems=[
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
var orderItems = 
  [
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

var customerInfo ={
  name:'Jason',number:'248 719 1725',address:'922 Folsom'
}

storiesOf('OrderPageLayout', module).add('Happy Path', () =>
  <OrderPageLayout> 
  <Nav/>
  <MenuComponent items={menuItems}  />
  <OrderTableComponent items={orderItems} />
  <OrderTableForm CustomerInfo={customerInfo} />
  <Footer/>
  </OrderPageLayout>
)