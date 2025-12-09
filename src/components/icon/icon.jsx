import PropTypes from 'prop-types';
import styled from 'styled-components';

// id указывает какой тип иконки будет использоваться, size и margin применятся в стилях
// пропсы передаются через компонент Icon
const IconContainer = ({ className, id, onClick, ...props }) => (
	<div className={className} onClick={onClick} {...props}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({ size = '24px' }) => size};
	margin: ${({ margin = '0' }) => margin};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
	cursor: ${({ inActive }) => (inActive ? 'default' : 'pointer')};
`;

Icon.propTypes = {
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};
