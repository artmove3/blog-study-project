import { createUser } from './create-user';
import { getUser } from './get-user';
import { sessions } from './sessions';

export const server = {
	async logout(hash) {
		sessions.remove(hash);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такого пользователя не существует.',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль.',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	async register(regLogin, regPassword) {
		const existedUser = await getUser(regLogin);

		if (existedUser) {
			return {
				error: 'Пользователь с таким логином уже существует.',
				res: null,
			};
		}

		const user = await createUser(regLogin, regPassword);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
