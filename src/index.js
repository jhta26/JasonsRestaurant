import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import OrderPageLayout from './components/OrderPageLayout'
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './components/MenuItemComponent';
import './components/OrderPageLayout.story.css'
import MenuComponent from './components/MenuComponent'
import OrderTableForm from './components/OrderTableForm'
import OrderTableComponent from './components/OrderTableComponent'
import items from './components/OrderTableComponent'
import CustomerInfo from './components/OrderTableForm'







ReactDOM.render(  <OrderPageLayout> 
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
  </OrderPageLayout>,
document.getElementById('root')
  )

