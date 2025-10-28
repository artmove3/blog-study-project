import { getDate } from '../utils/get-date';

export const createComment = async (postId, userName, content) => {
	return fetch(`http://localhost:3004/comments`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			user_name: userName,
			post_id: postId,
			content,
			published_at: getDate(),
		}),
	});
};
