import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../../components/button/button';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<Button onClick={() => setPage(1)} disabled={page === 1}>
				В начало
			</Button>
			<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
				Следующая
			</Button>
			<Button onClick={() => setPage(lastPage)} disabled={page === lastPage}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 140px;
	width: 100%;
	margin: 10px 0;
	padding: 0 35px;

	button {
		margin: 0 5px;
	}

	.current-page {
		border: 1px solid #000;
		width: 100%;
		border-radius: 5px;
		text-align: center;
		padding: 5px;
		font-size: 18px;
		font-weight: 500;
		line-height: 35px;
	}
`;

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
	setPage: PropTypes.func.isRequired,
};
