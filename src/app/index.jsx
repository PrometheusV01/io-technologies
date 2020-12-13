import React from 'react';

//components
import { Search } from 'components/search';
import { Authors } from 'components/authors';
import { Pagination } from 'components/pagination';

//states
import { AuthorsProvider, useAuthors } from 'states';

//styles
import './styles.scss';

const App = () => {
	const init = useAuthors();

	console.log(init.state);

	return (
		<AuthorsProvider value = { init } >
			<div className = 'app' >
				<header className = 'app__header' >
					<Search />
				</header>
				<main className = 'app__main' >
					<Authors />
				</main>
				<footer className = 'app__pagination' >
					<Pagination />
				</footer>
			</div>
		</AuthorsProvider>
	);
};

export default App;

App.displayName = 'App';