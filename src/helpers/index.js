export const debounce = (f, ms) => {
	let timeout = null;
  
	return function(...arg) {
		const later = () => {
			timeout = null;
			f(...arg);
		};
        
		clearTimeout(timeout);

		timeout = setTimeout(later, ms);
	};
  
};