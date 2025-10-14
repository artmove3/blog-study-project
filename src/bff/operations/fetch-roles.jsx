import { getRoles } from '../api/get-roles';
import { sessions } from '../sessions';
import { ROLE } from '../constants/role';

export const fetchRoles = async (userSessionHash) => {
	// при проверке доступа сама операция знает, каким ролям доступ разрешен
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSessionHash, accessRoles)) {
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
