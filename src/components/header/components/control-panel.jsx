import styled from 'styled-components';
import { Icon } from '../../icon/icon';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../button/button';
import { ROLE } from '../../../constants/role';
import { selectUser } from '../../../selectors/select-user';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const UserLoginContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 18px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const { login, roleId, session } = useSelector(selectUser);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogoutButtonClick = () => {
		// удаление юзера из redux и из списка сессий
		dispatch(logout(session));
		// удаление юзера из sessionStorage браузера
		sessionStorage.removeItem('userData');
	};
	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<UserLoginContainer>
						<div>{login}</div>
						<Icon
							id="fa-sign-out"
							margin="0 0 0 10px"
							cursor="pointer"
							onClick={onLogoutButtonClick}
						/>
					</UserLoginContainer>
				)}
			</RightAligned>
			<RightAligned>
				<Icon
					id="fa-backward"
					margin="10px 0 0 0"
					onClick={() => navigate(-1)}
					cursor="pointer"
				/>
				<Link to="/posts">
					<Icon id="fa-file-text-o" margin="10px 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 16px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
