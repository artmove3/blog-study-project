import { getComments } from '../api/get-comments';
import { getPost } from '../api/get-post';

export const fetchPost = async (postId) => {
	let post;
	let error;
	try {
		post = await getPost(postId);
	} catch (postError) {
		error = postError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	const comments = await getComments(postId);
	return {
		error: null,
		res: {
			...post,
			comments,
		},
	};
};
