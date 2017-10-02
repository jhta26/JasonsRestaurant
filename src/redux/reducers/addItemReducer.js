export default function addItemReducer(currentState,action){
	switch(action.type){
		case 'ADD_ITEMS':
	
			return{
				...currentState,
				orderItems:[...currentState.orderItems,currentState.menuItems.find(item=>item.id===action.id)]
			}
			default:
			return currentState
	}
}