import styled from 'styled-components';

// id указывает какой тип иконки будет использоваться, size и margin применятся в стилях
// пропсы передаются через компонент Icon
const IconContainer = ({ className, id, onClick }) => (
	<div className={className} onClick={onClick}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
	cursor: ${({ inActive }) => (inActive ? 'default' : 'pointer')};
`;
