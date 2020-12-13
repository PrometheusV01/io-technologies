import React, { memo, useCallback } from 'react';

//states
import { useAuthorsContext } from 'states';

//assets
import Arrow from 'assets/images/arrow.svg';

//instruments
import { actions } from 'states/actions';

//styles
import './styles.scss';

export const Pagination = memo(() => {
	const { state, dispatch } = useAuthorsContext();
	const { page, total } = state;
    
	const handleNext = useCallback(() => {
		dispatch(actions.setPage(page + 1));
		dispatch(actions.searchAuthors());
	}, [page]);
	const handleBack = useCallback(() => {
		dispatch(actions.setPage(page - 1));
		dispatch(actions.searchAuthors());
	}, [page]);

	return (
		<div className = 'pagination' >
			{ page > 1 && (
				<button className = 'left' onClick = { handleBack } >
					<img src = { Arrow } alt = 'navLeft' />
				</button>
			) }
			<p>{page} - { total }</p>
			{ page < total && (
				<button className = 'right' onClick = { handleNext } >
					<img src = { Arrow } alt = 'navRight' />
				</button>
			) }
		</div>
	);
});

Pagination.displayName = 'Pagination';