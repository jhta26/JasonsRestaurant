
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

export default function OrderPage(){
  <div className='OrderPage'>
  <OrderPageLayout> 
  <Nav/>
  <MenuComponent items={[
{
  name:'Some Item',price:9.99,imagepath:'//via.placeholder.com/300x200'
},
{
  name:'Some Item',price:4.99,imagepath:'//via.placeholder.com/300x200'
},
{
  name:'Some Item',price:8.99,imagepath:'//via.placeholder.com/300x200'
},
{
  name:'Some Item',price:12.99,imagepath:'//via.placeholder.com/300x200'
}
  ]}/>
  <OrderTableComponent item={{
  name:'Some Item',price:12.99,imagepath:'//via.placeholder.com/300x200'
}} />
  <OrderTableForm CustomerInfo={{name:'Jason',number:'248 719 1725',address:'922 Folsom'}} />
  <Footer/>
  </OrderPageLayout>
  </div>
)}