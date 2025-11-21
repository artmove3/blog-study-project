import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks/use-server-request';
import { PostCard } from './components/post-card';
import { Pagination } from './components/pagination';
import { PAGE_LIMIT } from '../../bff/constants/page_limit';
import { getLastPageFromLinks } from './utils/get-last-page-from-links';

const MainPageContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGE_LIMIT).then(({ res, error }) => {
			if (error) {
				return;
			}

			setPosts(res.posts);
			setLastPage(getLastPageFromLinks(res.links));
		});
	}, [requestServer, page]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map((postProps, i) => (
					<PostCard key={i} props={postProps} />
				))}
			</div>
			{lastPage > 1 && (
				<Pagination page={page} lastPage={lastPage} setPage={setPage} />
			)}
		</div>
	);
};

export const MainPage = styled(MainPageContainer)`
	.post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`;
