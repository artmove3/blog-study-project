import { transformComments } from '../transformers/transform-comments';

const ALL_COMMENTS_URL = `http://localhost:3004/comments`;
const POST_COMMENTS_URL = `http://localhost:3004/comments?post_id=`;

export const getComments = async (postId) => {
	const url = postId === undefined ? ALL_COMMENTS_URL : POST_COMMENTS_URL + postId;

	return fetch(url)
		.then((response) => response.json())
		.then(
			(loadedComments) => loadedComments && loadedComments.map(transformComments),
		);
};
