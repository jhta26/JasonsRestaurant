import React, { Component } from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import OrderPage from './components/OrderPage'
import getMenuItemsProcess from './redux/thunks/getMenuItemsProcess'
import addItemProcess from './redux/thunks/addItemProcess'
import OrderPageContainer from './redux/containers/OrderPageContainer'
import setupStore from './redux/setupStore'


const store = setupStore()

export default class App extends Component{

render() {
    return (
    	<Provider store={store}>
      		<div className = 'App'>        
          		<OrderPageContainer/>        
     		 </div>
      </Provider>
    );
  }

}






