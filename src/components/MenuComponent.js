import React from 'react'
import MenuItemComponent from './MenuItemComponent'


var itemData=[]

function MenuComponent({items, onAddItem}){
	return (
		<div className='MenuComponent'>
	{items.map(item=><MenuItemComponent key={item.id} item={item} onAddItem={onAddItem} />)}
	</div>
	)
}
export default (itemData,MenuComponent)