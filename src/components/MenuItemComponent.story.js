
import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';
import './MenuItemComponent.story.css'

var itemData=[]
storiesOf('MenuItemComponent', module).add('Happy Path', () =>
  <MenuItemComponent item={{name:'Some Item',price:9.99,imagePath:'//via.placeholder.com/300x200',id:1}} onAddItem={itemId=>console.log(itemId)} />

).add('incomplete data',()=>
<MenuItemComponent item={{name:'Some Item',imagepath:'//via.placeholder.com/300x200'}} />
).add('no item passed in',()=><MenuItemComponent/>);
