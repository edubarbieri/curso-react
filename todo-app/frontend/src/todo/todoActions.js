import axios from 'axios';

const API_URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
	type: 'DESCRIPTION_CHANGE',
	payload: event.target.value
});

export const search = () => {
	return (dispatch, getState) => {
		const description = getState().todo.description;
		const search = description ? `&description__regex=/${description}/` : '';
		axios.get(`${API_URL}?sort=-createdAt${search}`)
			.then(resp => dispatch({
				type: 'TODO_SEARCH',
				payload: resp.data
			}));
	};
};


export const add = (description) => {
	return (dispach) => {
		axios.post(API_URL, {description})
			.then(() => dispach(clear()))
			.then(() => dispach(search()));
	};
};


export const markAsDone = (todo) => {
	return (dispach) => {
		axios.put(`${API_URL}/${todo._id}`, {...todo, done: true})
			.then(() => dispach(search()));
	};
};

export const markAsPending = (todo) => {
	return (dispach) => {
		axios.put(`${API_URL}/${todo._id}`, {...todo, done: false})
			.then(() => dispach(search()));
	};
};

export const remove = (todo) => {
	return (dispach) => {
		axios.delete(`${API_URL}/${todo._id}`)
			.then(() => dispach(search()));
	};
};

export const clear = () => {
	return [{type: 'TODO_CLEAR'}, search()];
};
