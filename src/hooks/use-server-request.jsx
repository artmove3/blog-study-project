import { useSelector } from 'react-redux';
import { selectUser } from '../selectors/select-user';
import { server } from '../bff/server';
import { useCallback } from 'react';

export const useServerRequest = () => {
	const session = useSelector(selectUser).session;

	return useCallback(
		(operation, ...params) => {
			const request = ['authorize', 'register'].includes(operation)
				? params
				: [session, ...params];

			return server[operation](...request);
		},
		[session],
	);
	// операции идут с разной нагрузкой; authorize и register принимают login и password,
	// logout и fetchRoles принимают userSessionHash
};
