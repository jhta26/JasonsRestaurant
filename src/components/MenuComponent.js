import React from 'react'
import MenuItemComponent from './MenuItemComponent'


var itemData=[]

function MenuComponent({items, onAddItem}){
	if(items){
	return (
		<div className='MenuComponent'>
	{items.map(item=><MenuItemComponent key={item.id} item={item} onAddItem={onAddItem} />)}
	</div>
	)
}else{
	return <div>'NOPE'</div>
}}
export default (MenuComponent)