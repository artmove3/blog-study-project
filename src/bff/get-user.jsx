export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3004/users?login=${loginToFind}`)
		.then((response) => response.json())
		.then(([loadedUser]) => loadedUser);
