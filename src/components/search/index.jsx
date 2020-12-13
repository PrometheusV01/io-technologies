import React, { memo, useCallback, useEffect } from 'react';

//states
import { useAuthorsContext } from 'states';

//instruments
import { debounce } from 'helpers';
import { actions } from 'states/actions';

//styles
import './styles.scss';

const MS = 300; //0.3 seconds
const options = [
	{ name: 'По просмотрам', value: 'pageviews' },
	{ name: 'По имени', value: 'name' },
];

export const Search = memo(() => {
	const { dispatch, state } = useAuthorsContext();
	const { order } = state;

	const resetState = useCallback(() => {
		dispatch(actions.setPage(1));
		dispatch(actions.searchAuthors());
	}, []);
	const handleInput = useCallback(debounce(({ target: { value } }) => {
		if ( !value.length || value.trim()) {
			dispatch(actions.setFilter(value.trim()));
			resetState();
		}
	}, MS), []);
	const handleOrder = useCallback(({ target: { value } }) => {
		dispatch(actions.setOrder(value));
		resetState();
	}, []);

	useEffect(() => {
		dispatch(actions.searchAuthors());
	}, []);

	return (
		<div className = 'search' >
			<div className = 'search__filter' >
				<label htmlFor = 'search'></label>
				<input id = 'search' onChange = { handleInput } placeholder = 'Поиск авторов по имени' ></input>
			</div>
			<div className = 'search__order' >
				<select onChange = { handleOrder } >
					{ options.map(({ name, value }) => {
						return (
							<option key = { value } defaultValue = { value === order } value = { value } >{ name }</option>
						);
					}) }
				</select>
			</div>
		</div>
	);
});

Search.displayName = 'Search';