export const actions = {
	searchAuthors: () => ({ type: 'searchAuthors' }),
    
	setFilter: (filter) => ({ type: 'setFilter', payload: filter }),
    
	setPage: (page) => ({ type: 'setPage', payload: page }),
    
	setOrder: (order) => ({ type: 'setOrder', payload: order }),
};