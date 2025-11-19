import { getComments } from '../api/get-comments';
import { getPosts } from '../api/get-posts';
import { getCommentsCount } from '../utils/get-comments-count';

export const fetchPosts = async () => {
	const [posts, comments] = await Promise.all([getPosts(), getComments()]);

	return {
		error: null,
		res: posts.map((post) => ({
			...post,
			commentCount: getCommentsCount(comments, post.id),
		})),
	};
};
