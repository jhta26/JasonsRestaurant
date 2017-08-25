import React from 'react'
import MenuItemComponent from './MenuItemComponent'

function MenuComponent({items}){
	return (
		<div className='MenuComponent'>
	{items.map((item,index)=><MenuItemComponent key={index} item={item} />)}
	</div>
	)
}
export default (MenuComponent)