import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from '../../../components/input/input';
import { Icon } from '../../../components/icon/icon';

const SearchContainer = ({ className, onChange, value }) => {
	return (
		<div className={className}>
			<Input
				value={value}
				onChange={onChange}
				placeholder="Поиск по заголовкам..."
			/>
			<Icon id="fa-search" size="18px" inActive={true} />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	margin: 40px auto 0;
	width: 340px;
	height: 40px;
	position: relative;

	input {
		padding: 10px 35px 10px 10px;
	}

	div {
		position: absolute;
		right: 6px;
		top: 1px;
	}
`;

Search.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
