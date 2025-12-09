import styled from 'styled-components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent } from './components/post-content';
import { PostComments } from './components/post-comments';
import { useMatch, useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks/use-server-request';
import { loadPostAsync } from '../../actions/load-post-async';
import { selectPost } from '../../selectors/select-post';
import { PostForm } from './components/post-form';
import { RESET_POST_DATA } from '../../actions/reset-post-data';
import { Error } from '../../components/error/error';
import { PrivateContent } from '../../components/private-content/private-content';
import { ROLE } from '../../constants/role';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	// страница создания нового поста
	const isCreating = !!useMatch('/posts');
	// страница редактирования существующего поста
	const isEditing = !!useMatch('/posts/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// сбрасываем данные с редакс стора при создании нового поста
	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}
		dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [dispatch, requestServer, params, isCreating]);

	if (isLoading) {
		return null;
	}

	return error ? (
		<Error error={error} />
	) : isCreating || isEditing ? (
		<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
			<div className={className}>
				<PostForm post={post} />
			</div>
		</PrivateContent>
	) : (
		<>
			<div className={className}>
				<PostContent post={post} />
				<PostComments postId={post.id} comments={post.comments} />
			</div>
		</>
	);
};
export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
