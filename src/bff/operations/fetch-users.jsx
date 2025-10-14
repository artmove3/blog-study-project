import { getUsers } from '../api/get-users';
import { sessions } from '../sessions';
import { ROLE } from '../constants/role';

export const fetchUsers = async (userSessionHash) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSessionHash, accessRoles)) {
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
