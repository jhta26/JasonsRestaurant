import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import MenuItemComponent from '../components/MenuItemComponent'
import MenuComponent from '../components/MenuComponent'

const onAddItem = (itemId) => {
  console.log(`This is the itemID!!! ${itemId}`);
}

const item = { name: 'Some Item A', price: 9.99, imagePath: '//via.placeholder.com/300x200' }

const menuItems = [
  {
    "id": 1001,
    "name": "Royale with Cheese",
    "price": 8.99,
    "imagePath": "img/burger.jpg"
  },
  {
    "id": 1002,
    "name": "Arugula Pie",
    "price": 11.99,
    "imagePath": "img/pizza.jpg"
  },
  {
    "id": 1003,
    "name": "Smoked Swine",
    "price": 14.99,
    "imagePath": "img/ribs.jpg"
  },
  {
    "id": 1004,
    "name": "Ice Cream Biscut",
    "price": 7.99,
    "imagePath": "img/ice_cream.jpg"
  },
  {
    "id": 1005,
    "name": "Banh Mi",
    "price": 9.99,
    "imagePath": "img/banh_mi.jpg"
  }
];

	describe('test for MenuComponent', ()=>{

		it('should have same items as data',()=>{

			let items = mount(<MenuComponent items={menuItems}/>).find('MenuItemComponent').length
			assert(items, menuItems.length)
		})
		it('onAddItem should work', ()=>{

			const onAddItem=jest.fn()
			mount(<MenuItemComponent items={menuItems} onAddItem={onAddItem}/>).find('.card-action').children('a').simulate('click')
			expect(onAddItem).toHaveBeenCalled()
		})
	})

