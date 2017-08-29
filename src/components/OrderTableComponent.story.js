
import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';
import itemData from './MenuComponent'
import OrderTableComponent from './OrderTableComponent'
import './OrderTableComponent.story.css'
console.log
storiesOf('OrderTableComponent', module).add('Happy Path', () =>
  <OrderTableComponent items={

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

	} />

)