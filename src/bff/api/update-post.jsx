export const updatePost = async ({ id, imageUrl, title, content }) => {
	return fetch(`http://localhost:3004/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
		}),
	}).then((loadedPosts) => loadedPosts.json());
};
