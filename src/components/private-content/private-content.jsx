import { useSelector } from 'react-redux';
import { Error } from '../error/error';
import { selectUser } from '../../selectors/select-user';
import { checkAccess } from '../../utils/check-access';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const currentUserRole = useSelector(selectUser).roleId;

	const accessError = checkAccess(access, currentUserRole) ? null : 'Доступ запрещен.';

	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};
