export const getPostDate = () =>
	new Date().toLocaleString().substring(0, 10).replaceAll('.', '-');
