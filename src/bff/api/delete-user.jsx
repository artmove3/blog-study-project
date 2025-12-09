export const deleteUser = async (userId) =>
	fetch(`http://localhost:3004/users/${userId}`, {
		method: 'DELETE',
	});
