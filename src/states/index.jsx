import { useReducer, createContext, useContext} from 'react';

import { reducer, initState } from './reducer';

const context = createContext();
export const { Provider: AuthorsProvider  } = context;
export const useAuthorsContext = () => useContext(context);

export const useAuthors = () => {
	const [state, dispatch] = useReducer(reducer, initState);

	return { state, dispatch };
};