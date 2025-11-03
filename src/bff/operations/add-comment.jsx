import { createComment } from '../api/create-comment';
import { getComments } from '../api/get-comments';
import { getPost } from '../api/get-post';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const addComment = async (userSessionHash, postId, userName, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.USER];

	const access = await sessions.access(userSessionHash, accessRoles);

	if (!access) {
		return {
			error: 'Авторизируйтесь, чтобы написать комментарий',
			res: null,
		};
	}

	await createComment(postId, userName, content);

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
