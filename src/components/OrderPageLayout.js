import React from 'react'
import MenuItemComponent from './MenuItemComponent'
import MenuComponent from './MenuComponent'
// import items from './MenuComponent'
import OrderTableForm from './OrderTableForm'
import OrderTableComponent from './OrderTableComponent'
import Nav from './Nav'
import Footer from './Footer'

var items= [
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
   ]
export default function OrderPageLayout(props){
	
	return(

<div className='OrderPageLayout'>
   {props.children[0]}
   <div className = 'container'>
      <div className='row Roww'>
      <div className='col s12 m7 l7'>
         <h3 className="grey-text text-darken-4">Menu</h3>
         {props.children[1]}
      </div>
      <div className="col s12 m5 l5">
         <h3 className="grey-text text-darken-4">Order</h3>
         {props.children[2]}
         {props.children[3]}
      </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </div>
   </div>
{props.children[4]}
</div>

	
)
}

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
// <script type="text/javascript" src="js/materialize.js"></script>
// <script type="text/javascript" src="js/order.js"></script>