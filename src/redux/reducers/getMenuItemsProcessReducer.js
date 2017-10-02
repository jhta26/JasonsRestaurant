export default function getMenuItemsProcessReducer(currentState,action){
switch (action.type){
	case 'GET_MENUITEMS_STARTED':
		return{
			...currentState,
			isGettingMenuItems:true
		}
	case 'GET_MENUITEMS_COMPLETED':
		return{
			...currentState,
			menuItems: action.menuItems,
			isGettingMenuItems:false
		}
	case 'GET_MENUITEMS_FAILED':
		return{
			...currentState,
			isGettingMenuItems:false,
			didGettingMenuItemsFail:true
		}
		default:
		return currentState
}

}