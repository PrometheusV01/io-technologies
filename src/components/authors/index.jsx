import React, { memo, useCallback } from 'react';

//states
import { useAuthorsContext } from 'states';

//styles
import './styles.scss';

//assets
import Medal1 from 'assets/images/1st.svg';
import Medal2 from 'assets/images/2nd.svg';
import Medal3 from 'assets/images/3rd.svg';

const medals = {
	1: Medal1,
	2: Medal2,
	3: Medal3,
};
const colors = ['#67c9de', '#ba6fcb', '#e39473', '#5aa9e6', '#ac5061', '#b4507b'];

export const Authors = memo(() => {
	const { state } = useAuthorsContext();
	const { authors } = state;
    
	const randomColor = useCallback(() => {
		const idx = Math.floor(Math.random() * Math.floor(colors.length));

		return colors[idx];
	}, []);

	return (
		<table className = 'authors' >
			<tbody>
				{ authors.map((item, idx) => {
					return (
						<tr className = 'authors__item' key = { idx } >
							<td className = 'position' >
								{ idx + 1 }
							</td>
							<td className = 'desc-td' >
								<div className = 'description' >
									<b style = { { background: randomColor() } } >{ item.name.charAt() }</b>
									<div className = 'description__detail' >
										<h5 className = 'h5' >{ item.name }</h5>
										<p>{ item.count_pub } публ.</p>
									</div>
								</div>
							</td>
							<td className = 'medal' >
								{ item.medal && <img src = { medals[item.medal] } alt = 'medal' /> }
							</td>
							<td className = 'pageViews' >
								<strong  >
									{ item.pageviews }
								</strong>
							</td>
						</tr>
					);
				}) }
			</tbody>
		</table>
	);
});

Authors.displayName = 'Authors';