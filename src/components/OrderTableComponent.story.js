
import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';

import OrderTableComponent from './OrderTableComponent'
import './OrderTableComponent.story.css'

storiesOf('OrderTableComponent', module).add('Happy Path', () =>
  <OrderTableComponent item={

{
	name:'Some Item',price:12.99,imagepath:'//via.placeholder.com/300x200'
}
	} />

)