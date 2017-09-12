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

describe('Testing MenuItemComponent',()=>{
	const shallowWrapper= shallow(<MenuItemComponent item={item} onAddItem={onAddItem}/>)

it('should render the menu item name', ()=>{
	const itemNameWrapper = shallowWrapper.find('.card-title')
	assert.equal(itemNameWrapper.length,1)
	
})
it('should render the menu price', ()=>{
	let itemPriceWrapper = shallowWrapper.find('.card-content').children('p')
	assert.equal(price.length,1)
	
})
it('should test add Item',()=>{
const onAddItem = jest.fn()
mount(<MenuItemComponent onAddItem={onAddItem} item={item}/>).find('.menuChoice').simulate('click')
expect(onAddItem).toHaveBeenCalled()


})

it('renders correctly',()=>{

const image = renderer.create(<img src={item.imagePath || '//via.placeholder.com/300x200'} alt="" />).toJSON()
expect(image).toMatchSnapshot()


})


})