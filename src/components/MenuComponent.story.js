import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuComponent from './MenuComponent'
import './MenuComponent.story.css'


storiesOf('MenuComponent',module)
.add('Happy path',()=><MenuComponent items={[
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
	]}
	/>)

