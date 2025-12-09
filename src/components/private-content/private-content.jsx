import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Error } from '../error/error';
import { selectUser } from '../../selectors/select-user';
import { checkAccess } from '../../utils/check-access';
import { PROP_TYPE } from '../../constants/prop-type';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const currentUserRole = useSelector(selectUser).roleId;

	const accessError = checkAccess(access, currentUserRole) ? null : 'Доступ запрещен.';

	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};

PrivateContent.propTypes = {
	children: PropTypes.node.isRequired,
	access: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	serverError: PROP_TYPE.ERROR,
};
