import { setUserRole } from '../api/set-user-role';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const updateUserRole = async (userSessionHash, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSessionHash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен.',
			res: null,
		};
	}

	await setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
