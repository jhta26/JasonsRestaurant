export default function submitOrderFormReducer(currentState,action){
	switch (action.type){
		case 'SUBMIT_FORM':
			return{
				...currentState,
				customerInfo:action.customerInfo
			}
			default:
				return currentState
	}
}