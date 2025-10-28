export const createSession = async (hash, user) => {
	return fetch(`http://localhost:3004/sessions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			user,
			hash,
		}),
	});
};
