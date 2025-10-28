import { transformPost } from '../transformers/transform-post';

export const getPost = async (postId) =>
	fetch(`http://localhost:3004/posts/${postId}`)
		.then((response) => response.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
