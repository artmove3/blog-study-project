import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks/use-server-request';
import { PostCard } from './components/post-card';

const MainPageContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			if (posts.error) {
				return;
			}

			setPosts(posts.res);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map((postProps, i) => (
					<PostCard key={i} props={postProps} />
				))}
			</div>
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
