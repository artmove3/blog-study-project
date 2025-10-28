import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent } from './components/post-content';
import { PostComments } from './components/post-comments';
import { useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks/use-server-request';
import { loadPostAsync } from '../../actions/load-post-async';
import { selectPost } from '../../selectors/select-post';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params]);

	return (
		<div className={className}>
			<PostContent post={post} />
			<PostComments postId={post.id} comments={post.comments} />
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
