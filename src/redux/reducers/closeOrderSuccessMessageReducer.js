export default function closeOrderSuccessMessageReducer(currentState,action){
	switch (action.type){
		case 'CLOSE_SUCCESS_MESSAGE':
		return{
			...currentState,
			customerInfo:null,
			orderItems:[]
		}
	}
}