
import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';

import OrderTableForm from './OrderTableForm'
import './OrderTableForm.story.css'

storiesOf('OrderTableForm', module).add('Happy Path', () =>
  <OrderTableForm CustomerInfo={{name:'Jason',number:'248 719 1725',address:'922 Folsom'}} />

)