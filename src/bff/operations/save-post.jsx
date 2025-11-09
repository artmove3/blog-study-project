import { updatePost } from '../api/update-post';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const savePost = async (userSessionHash, postData) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSessionHash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен.',
			res: null,
		};
	}

	const updatedPost = await updatePost(postData);

	return {
		error: null,
		res: updatedPost,
	};
};
