import { createSession } from './api/create-session';
import { deleteSession } from './api/delete-session';
import { getSession } from './api/get-session';

export const sessions = {
	// list: {},
	create(user) {
		const hash = Math.random().toFixed(50);

		// this.list[hash] = user;

		createSession(hash, user);

		return hash;
	},

	async remove(hash) {
		const session = await getSession(hash);

		if (!session) return;
		// delete this.list[hash];
		deleteSession(session.id);
	},

	async access(hash, accessRoles) {
		// const user = this.list[hash];
		const session = await getSession(hash);
		return !!session.user && accessRoles.includes(session.user.roleId);
	},
};
