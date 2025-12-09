import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
};
