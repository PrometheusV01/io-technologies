//api
import { getAuthors } from 'api';

export const initState = {
	authors: [],
	filter: '',
	page: 1,
	order: 'pageviews',
	total: null,
};

export const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
	case 'setFilter': {
		return { ...state, filter: payload};
	}
	case 'setPage': {
		return { ...state, page: payload };
	}
	case 'setOrder': {
		return { ...state, order: payload };
	}
	case 'searchAuthors': {
		const { filter, page, order } = state;

		const search = getAuthors(filter, page, order);

		return { ...state, ...search };
	}
	default: {
		console.error('Type is not defined');
		return state;
	}
	}
};