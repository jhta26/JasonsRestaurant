import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import MenuItemComponent from '../components/MenuItemComponent'
import renderer from 'react-test-renderer'



const item = { name: 'Some Item A', price: 9.99, imagePath: '//via.placeholder.com/300x200' }
const onAddItem = jest.fn()


describe('Testing MenuItemComponent',()=>{
	

it('should render the menu item name', ()=>{
	const shallowWrapper= shallow(<MenuItemComponent item={item} onAddItem={onAddItem}/>)
	const itemNameWrapper = shallowWrapper.find('.card-title')
	assert.equal(itemNameWrapper.length,1)
	
})
it('should render the menu price', ()=>{
	const shallowWrapper= shallow(<MenuItemComponent item={item} onAddItem={onAddItem}/>)
	let itemPriceWrapper = shallowWrapper.find('.card-content').children('p')
	expect(itemPriceWrapper.text()).toBe('9.99')
	
})
it('should test add Item',()=>{

const shallowWrapper= shallow(<MenuItemComponent item={item} onAddItem={onAddItem}/>)
mount(<MenuItemComponent item={item} onAddItem={onAddItem}/>).find('.link').simulate('click')
expect(onAddItem).toHaveBeenCalled()


})

it('renders correctly',()=>{
const shallowWrapper= shallow(<MenuItemComponent item={item} onAddItem={onAddItem}/>)
var item = { name: 'Some Item A', price: 9.99, imagePath: '//via.placeholder.com/300x200' }
const image = renderer.create(<img src={item.imagePath || '//via.placeholder.com/300x200'} alt="" />).toJSON()
expect(image).toMatchSnapshot()


})


})