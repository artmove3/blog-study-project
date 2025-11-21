import { getComments } from '../api/get-comments';
import { getPosts } from '../api/get-posts';
import { getCommentsCount } from '../utils/get-comments-count';

export const fetchPosts = async (page, limit) => {
	const [{ posts, links }, comments] = await Promise.all([
		getPosts(page, limit),
		getComments(),
	]);
	return {
		error: null,
		res: {
			posts: posts.map((post) => ({
				...post,
				commentCount: getCommentsCount(comments, post.id),
			})),
			links,
		},
	};
};
