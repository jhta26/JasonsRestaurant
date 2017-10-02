export default function addItemProcess(itemId){
	return(dispatch,getState)=>{
		dispatch({
			type:'ADD_ITEMS',
			id:itemId
		})
	}
}