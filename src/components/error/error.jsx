import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H2 } from '../h2/h2';
import { PROP_TYPE } from '../../constants/prop-type';

const ErrorContainer = ({ className, error }) => {
	return (
		<div className={className}>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</div>
	);
};
export const Error = styled(ErrorContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
