import { getPostDate } from '../utils/get-post-date';

export const createPost = async (postData) => {
	return fetch('http://localhost:3004/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			title: postData.title,
			image_url: postData.imageUrl,
			content: postData.content,
			published_at: getPostDate(),
		}),
	}).then((response) => response.json());
};
