import { deleteComment } from '../api/delete-comment';
import { deletePost } from '../api/delete-post';
import { getComments } from '../api/get-comments';
import { ROLE } from '../constants/role';
import { sessions } from '../sessions';

export const removePost = async (userSessionHash, postId) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(userSessionHash, accessRoles);

	if (!access) {
		return {
			error: 'Нет доступа.',
			res: null,
		};
	}

	await deletePost(postId);

	const comments = await getComments(postId);

	//удаляем все комментарии к посту, т.к. на сервере они хранятся отдельно

	await Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));

	return {
		error: null,
		res: true,
	};
};
