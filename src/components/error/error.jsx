import styled from 'styled-components';
import { H2 } from '../h2/h2';

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
