export const setUserRole = async (userId, newUserRoleId) => {
	return fetch(`http://localhost:3004/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			role_id: Number(newUserRoleId),
		}),
	});
};
