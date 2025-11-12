export const deletePost = async (id) => {
	return fetch(`http://localhost:3004/posts/${id}`, {
		method: 'DELETE',
	});
};
