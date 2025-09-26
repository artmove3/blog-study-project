import styled from 'styled-components';
import { Logo } from './components/logo';
import { ControlPanel } from './components/control-panel';

const Description = styled.div`
	font-style: italic;
`;

const HeaderComponent = ({ className }) => (
	<header className={className}>
		<Logo />
		<Description>
			Веб-технологии <br />
			Написание кода <br />
			Разбор ошибок
		</Description>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderComponent)`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	background-color: #fff;
	box-shadow: 0 -2px 15px #000;
`;
