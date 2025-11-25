import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks/use-server-request';
import { PostCard } from './components/post-card';
import { Pagination } from './components/pagination';
import { PAGE_LIMIT } from '../../bff/constants/page_limit';
import { getLastPageFromLinks } from './utils/get-last-page-from-links';
import { Search } from './components/search';
import { debounce } from './utils/debounce';

const MainPageContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGE_LIMIT).then(
			({ res, error }) => {
				if (error) {
					return;
				}

				setPosts(res.posts);
				setLastPage(getLastPageFromLinks(res.links));
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="posts-and-search">
				<Search onChange={onSearch} value={searchPhrase} />
				{posts.length > 0 ? (
					<div className="post-list">
						{posts.map((postProps, i) => (
							<PostCard key={i} props={postProps} />
						))}
					</div>
				) : (
					<div className="no-posts-found">Статьи не найдены</div>
				)}
			</div>

			{lastPage > 1 && posts.length > 0 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const MainPage = styled(MainPageContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}

	.no-posts-found {
		text-align: center;
		font-size: 18px;
		margin-top: 40px;
	}
`;
