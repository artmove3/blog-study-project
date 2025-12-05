import styled from 'styled-components';
import { Icon } from '../../../components/icon/icon';
import { TableRow } from './table-row';
import { useState } from 'react';
import { useServerRequest } from '../../../hooks/use-server-request';

const UserRowContainer = ({ className, roles, userProps, onDeleteUserButtonClick }) => {
	const { id, login, registeredAt, roleId: userRoleId } = userProps;

	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);

	const isSelectedButtonDisabled = selectedRoleId === initialRoleId;

	const requestServer = useServerRequest();

	const onSaveUserButtonClick = (userId, newSelectedRoleId) => {
		requestServer('updateUserRole', userId, newSelectedRoleId).then(() => {
			setInitialRoleId(newSelectedRoleId);
		});
	};

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin=" 0 0 0 10px"
						disabled={isSelectedButtonDisabled}
						inActive={isSelectedButtonDisabled}
						onClick={() => onSaveUserButtonClick(id, selectedRoleId)}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin=" 0 0 0 10px"
				onClick={() => onDeleteUserButtonClick(id)}
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;

	margin-top: 10px;
	.role-column {
		display: flex;
	}

	select {
		font-size: 16px;
		padding: 0 5px;
	}

	& > div:first-child {
		border: 1px solid #000;
	}
`;
