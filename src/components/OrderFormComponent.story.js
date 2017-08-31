
import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';

import OrderFormComponent from './OrderFormComponent'
import './OrderTableForm.story.css'

storiesOf('OrderFormComponent', module).add('Happy Path', () =>
  <OrderFormComponent CustomerInfo={{name:'Jason',number:'248 719 1725',address:'922 Folsom'}} />

)