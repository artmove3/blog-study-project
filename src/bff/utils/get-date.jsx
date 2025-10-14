export const getDate = () =>
	new Date(Date.now()).toISOString().substring(0, 16).replace('T', ' ');
