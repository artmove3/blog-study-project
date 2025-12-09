import { getDate } from '../utils/get-date';

export const createUser = async (regLogin, regPassword) => {
	return fetch('http://localhost:3004/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			id: String(Date.now()),
			login: regLogin,
			password: regPassword,
			registered_at: getDate(),
			role_id: 2,
		}),
	}).then((response) => response.json());
};
