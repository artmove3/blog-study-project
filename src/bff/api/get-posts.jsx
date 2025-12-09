import { transformPost } from '../transformers/transform-post';

export const getPosts = async (searchPhrase, page, limit) =>
	fetch(
		`http://localhost:3004/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	)
		.then((response) => Promise.all([response.json(), response.headers.get('Link')]))
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts.map(transformPost),
			links,
		}));
