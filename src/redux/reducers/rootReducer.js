import closeOrderSuccessMessageReducer from './closeOrderSuccessMessageReducer'
import addItemReducer from './addItemReducer'
import submitOrderFormReducer from './submitOrderFormReducer'
import getMenuItemsProcessReducer from './getMenuItemsProcessReducer'


export default function rootReducer(
currentState={
	menuItems:[],
	orderItems:[],
	customerInfo:null
	},action
	){
switch(action.type){
	case 'GET_MENUITEMS_STARTED':
		return{
			...currentState,
			isGettingMenuItems:true
		}
	case 'GET_MENUITEMS_COMPLETED':
		return{
			...currentState,
			menuItems: action.menuItems,
			orderItems:[],
			isGettingMenuItems:false
		}
	case 'GET_MENUITEMS_FAILED':
		return{
			...currentState,
			isGettingMenuItems:false,
			didGettingMenuItemsFail:true
		}
		case 'ADD_ITEMS':
			return{
				...currentState,
				orderItems:[...currentState.orderItems,currentState.menuItems.find(item=>item.id===action.id)]
			}
		case 'SUBMIT_FORM':
			return{
				...currentState,
				customerInfo:action.customerInfo
			}
			case 'CLOSE_SUCCESS_MESSAGE':
		return{
			...currentState,
			customerInfo:null,
			orderItems:[]
		}

}



}