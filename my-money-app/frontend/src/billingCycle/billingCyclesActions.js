import axios from 'axios';
import { reset as resetForm, initialize } from 'redux-form';
import { selectTab, showTabs } from '../common/tab/tabActions';

import {
	toastr
} from 'react-redux-toastr';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUE = {
	credits: [{}],
	debts: [{}]
};

export function getList() {
	const request = axios.get(`${BASE_URL}/billingCycles`);
	return {
		type: 'BILLING_CYCLES_FETCHED',
		payload: request
	};
}

export function create(values) {
	return submit(values, 'post');
}

export function update(values) {
	return submit(values, 'put');
}
export function remove(values) {
	return submit(values, 'delete');
}

function submit(values, method){
	return dispatch => {
		const itemId = values._id ? values._id : '';
		axios[method](`${BASE_URL}/billingCycles/${itemId}`, values)
			.then(() => {
				toastr.success('Sucesso', 'Operação executado com sucesso!');
				dispatch(init());
			}).catch(error => {
				const errors = error.response.data.errors || [];
				errors.forEach(error => {
					toastr.error('Erro', error);
				});
			});
	};
}

export function showUpdate(billingCycle){
	return [
		showTabs('tabUpdate'),
		selectTab('tabUpdate'),
		initialize('billingCycleForm', billingCycle)
	];
}

export function init() {
	return [
		showTabs('tabList', 'tabCreate'),
		selectTab('tabList'),
		getList(),
		initialize('billingCycleForm', INITIAL_VALUE)
	];
}
//TODO: reusar com showUpdate
export function showDelete(billingCycle){
	return [
		showTabs('tabDelete'),
		selectTab('tabDelete'),
		initialize('billingCycleForm', billingCycle)
	];
}


