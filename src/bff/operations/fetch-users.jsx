import { getUsers } from '../api/get-users';
import { sessions } from '../sessions';
import { ROLE } from '../constants/role';

export const fetchUsers = async (userSessionHash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSessionHash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен.',
			res: null,
		};
	}

	const users = await getUsers();

	return {
		error: null,
		res: users,
	};
};
