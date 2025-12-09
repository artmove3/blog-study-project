import { transformSession } from '../transformers/transform-session';

export const getSession = async (hash) => {
	return fetch(`http://localhost:3004/sessions?hash=${hash}`)
		.then((loadedSession) => loadedSession.json())
		.then(([loadedSession]) => loadedSession && transformSession(loadedSession));
};
