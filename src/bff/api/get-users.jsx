import { transformUser } from '../transformers/transform-user';

export const getUsers = async () =>
	fetch(`http://localhost:3004/users`)
		.then((response) => response.json())
		.then((loadedUsers) => loadedUsers.map(transformUser));
