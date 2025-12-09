import { deleteComment } from '../api/delete-comment';
import { getComments } from '../api/get-comments';
import { getPost } from '../api/get-post';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const removeComment = async (userSessionHash, id, postId) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.access(userSessionHash, accessRoles);

	if (!access) {
		return {
			error: 'Нет доступа.',
			res: null,
		};
	}

	await deleteComment(id);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	return {
		error: null,
		res: {
			...post,
			comments,
		},
	};
};
