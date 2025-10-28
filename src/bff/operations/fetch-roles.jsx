import { getRoles } from '../api/get-roles';
import { sessions } from '../sessions';
import { ROLE } from '../constants/role';

export const fetchRoles = async (userSessionHash) => {
	// при проверке доступа сама операция знает, каким ролям доступ разрешен
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSessionHash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен.',
			res: null,
		};
	}

	const roles = await getRoles();

	return {
		error: null,
		res: roles,
	};
};
