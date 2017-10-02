import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuComponent from './MenuComponent';
import './MenuComponent.story.css';

var itemData = [];
storiesOf('MenuComponent', module).add('Happy path', () =>
  <MenuComponent
    items={[
      {
        name: 'Some Item',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200',
        id: 1
      },
      {
        name: 'Some Item',
        price: 4.99,
        imagePath: '//via.placeholder.com/300x200',
        id: 2
      },
      {
        name: 'Some Item',
        price: 8.99,
        imagePath: '//via.placeholder.com/300x200',
        id: 3
      },
      {
        name: 'Some Item',
        price: 12.99,
        imagePath: '//via.placeholder.com/300x200',
        id: 4
      }
    ]}
    onAddItem={itemId => {
      console.log(itemId);
    }}
  />
);
