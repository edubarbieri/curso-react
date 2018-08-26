import {combineReducers} from 'redux';
import dashBoardReducer from '../dashboard/dashboardReducer';
import tabReducer from '../common/tab/tabReducer';
import billingCycleReducer from '../billingCycle/billingCycleReducer';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastReducer} from 'react-redux-toastr';
import authReducer from '../auth/authReducer';

const rootReducer = combineReducers({
	dashboard: dashBoardReducer,
	tab: tabReducer,
	billingCycle: billingCycleReducer,
	form: formReducer,
	toastr: toastReducer,
	auth: authReducer
});

export default rootReducer;
