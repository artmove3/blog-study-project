import { getComments } from '../api/get-comments';
import { getPost } from '../api/get-post';

export const fetchPost = async (postId) => {
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
