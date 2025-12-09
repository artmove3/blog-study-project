export const deleteComment = async (id) => {
	return fetch(`http://localhost:3004/comments/${id}`, {
		method: 'DELETE',
	});
};
