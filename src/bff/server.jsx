import { authorize } from './operations/authorize';
import { fetchRoles } from './operations/fetch-roles';
import { fetchUsers } from './operations/fetch-users';
import { logout } from './operations/logout';
import { register } from './operations/register';
import { removeUser } from './operations/remove-user';
import { updateUserRole } from './operations/update-user-role';

export const server = {
	logout,
	authorize,
	register,
	fetchRoles,
	fetchUsers,
	updateUserRole,
	removeUser,
};
