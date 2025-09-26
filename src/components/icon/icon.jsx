import styled from 'styled-components';

// id указывает какой тип иконки будет использоваться, size и margin применятся в стилях
// пропсы передаются через компонент Icon
const IconContainer = ({ className, id, navigate }) => (
	<div className={className} onClick={() => navigate(-1)}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	cursor: pointer;
`;
