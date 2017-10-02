import getMenuItems from '../../request/getMenuItems'

export default function getMenuItemsProcess(){
	return(dispatch,getState,env)=>{
		return getMenuItems()
		.then(menuItems=>{
			dispatch({type: 'GET_MENUITEMS_COMPLETED',menuItems:menuItems})
			return menuItems
		})
		.catch(error=>{
			dispatch({type: 'GET_MENUITEMS_FAILED'})
		})
	}
}