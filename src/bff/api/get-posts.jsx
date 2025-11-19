import { transformPost } from '../transformers/transform-post';

export const getPosts = async () =>
	fetch(`http://localhost:3004/posts`)
		.then((response) => response.json())
		.then((loadedPosts) => loadedPosts.map(transformPost));
