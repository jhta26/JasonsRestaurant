import {compose,lifecycle} from 'recompose'
import {connect} from 'react-redux'
import OrderPage from '../../components/OrderPage'
import getMenuItemsProcess from '../thunks/getMenuItemsProcess'
import addItemProcess from '../thunks/addItemProcess'



function mapStateToProps(state,ownProps){
	return{...state}
}

function mapDispatchToProps(dispatch,ownProps){
	return{
		onMount: ()=>dispatch(getMenuItemsProcess()),
		onAddItem: itemId=>dispatch(addItemProcess(itemId)),
		onSubmitOrderForm: ({name,number,address})=>dispatch({type:'SUBMIT_FORM',customerInfo:{name,number,address}}),
		onCloseOrderSuccessMessage: ()=>dispatch({type:'CLOSE_SUCCESS_MESSAGE'})
	}
}

const connectToStore = connect(mapStateToProps,mapDispatchToProps)

const onDidMount = lifecycle({
	componentDidMount(){
		this.props.onMount()
	}
})

export default compose(connectToStore,onDidMount)(OrderPage)