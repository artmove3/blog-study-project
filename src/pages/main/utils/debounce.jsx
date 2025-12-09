export const debounce = (fn, delay) => {
	let timeoutId;
	// ...args упадут в переданную fn функцию
	return (...args) => {
		// сбрасывает timeout при вызове функции
		// последний вызов отработает timeout при заданном delay
		clearTimeout(timeoutId);
		timeoutId = setTimeout(fn, delay, ...args);
	};
};
