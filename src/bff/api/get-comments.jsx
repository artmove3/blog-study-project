import { transformComments } from '../transformers/transform-comments';

export const getComments = async (postId) => {
	return fetch(`http://localhost:3004/comments?post_id=${postId}`)
		.then((response) => response.json())
		.then(
			(loadedComments) => loadedComments && loadedComments.map(transformComments),
		);
	// .then(([loadedComments]) => loadedComments && transformComments(loadedComments));
};
// .then((response) => response.json())
//         .then(([loadedUser]) => loadedUser && transformUser(loadedUser));
