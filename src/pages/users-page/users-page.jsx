import styled from 'styled-components';
import { H2 } from '../../components/h2/h2';
import { UserRow } from './components/user-row';
import { TableRow } from './components/table-row';
import { useServerRequest } from '../../hooks/use-server-request';
import { useEffect, useState } from 'react';
import { PrivateContent } from '../../components/private-content/private-content';
import { ROLE } from '../../constants/role';
import { checkAccess } from '../../utils/check-access';
import { useSelector } from 'react-redux';
import { selectUser } from '../../selectors/select-user';

const UsersPageContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const [roles, setRoles] = useState([]);
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const userRole = useSelector(selectUser).roleId;

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, userRole]);

	const onDeleteUserButtonClick = (userId) => {
		if (checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}
		requestServer('removeUser', userId).then(() => {
			setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
		});
	};

	return (
		<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
			<div className={className}>
				<H2>Пользователи</H2>
				<div className="table-container">
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registered-at-column">Дата регистрации</div>
						<div className="role-column">Роль</div>
					</TableRow>
					{users.map((user) => {
						return (
							<UserRow
								key={user.id}
								roles={roles.filter(({ id }) => id !== ROLE.GUEST)}
								userProps={user}
								onDeleteUserButtonClick={onDeleteUserButtonClick}
							/>
						);
					})}
				</div>
			</div>
		</PrivateContent>
	);
};

export const UsersPage = styled(UsersPageContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 570px;
	margin: 0 auto;
	font-size: 18px;

	& > .table-container {
		width: 100%;
	}
`;
