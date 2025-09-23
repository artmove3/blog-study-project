import { createSession } from './create-session';
import { createUser } from './create-user';
import { getUser } from './get-user';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'unknown login',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'wrong password',
				res: null,
			};
		}

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'login is occupied',
				res: null,
			};
		}

		await createUser(regLogin, regPassword);

		return {
			error: null,
			res: createSession(user.role_id),
		};
	},
};
