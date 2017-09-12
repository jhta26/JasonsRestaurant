import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import MenuItemComponent from '../components/MenuItemComponent'

const onAddItem = (itemId) => {
  console.log(`This is the itemID!!! ${itemId}`);
}

const item = { name: 'Some Item A', price: 9.99, imagePath: '//via.placeholder.com/300x200' }

const menuItems = [
		{
			"name": "Smoked Swine",
			"price": 8.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 1
		},
		{
			"name": "Royale with Cheese",
			"price": 11.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 2
		},
		{
			"name": "Arugula Pie",
			"price": 14.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 3
		},
		{
			"name": "Ice Cream Biscuit",
			"price": 7.99,
			"imagePath": "//via.placeholder.com/300x200",
			"id": 4
		}
	];

	describe('test for MenuComponent', ()=>{

		it('should have same items as data',()=>{

			let items = mount(<MenuComponent items={menuItems}/>).find('MenuItemComponent').length
			assert(items, menuItems.length)
		})
		it('onAddItem should work', ()=>{

			const onAddItem=just.fn()
			mount(<MenuItemComponent items={menuItems} onAddItem={onAddItem}/>).find('.card-action').children('a').simulate('click')
			expect(onAddItem).toHaveBeenCalled()
		})
	})

