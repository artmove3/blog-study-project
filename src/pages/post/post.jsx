import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent } from './components/post-content';
import { PostComments } from './components/post-comments';
import { useMatch, useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks/use-server-request';
import { loadPostAsync } from '../../actions/load-post-async';
import { selectPost } from '../../selectors/select-post';
import { PostForm } from './components/post-form';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/posts/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, requestServer, params]);

	return (
		<div className={className}>
			{isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<PostComments postId={post.id} comments={post.comments} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
