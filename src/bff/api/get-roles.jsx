export const getRoles = async () =>
	fetch(`http://localhost:3004/roles`).then((response) => response.json());
