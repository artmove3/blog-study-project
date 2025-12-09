import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/icon';
import { Comment } from './comment';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../selectors/select-user';
import { addCommentAsync } from '../../../actions/add-comment-async';
import { useServerRequest } from '../../../hooks/use-server-request';
import { checkAccess } from '../../../utils/check-access';
import { ROLE } from '../../../constants/role';
import { PROP_TYPE } from '../../../constants/prop-type';

const PostCommentsContainer = ({ className, postId, comments }) => {
	const [newComment, setNewComment] = useState('');
	const { roleId } = useSelector(selectUser);
	const isGuest = checkAccess([ROLE.GUEST], roleId);

	const userName = useSelector(selectUser).login;
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const onNewCommentAdd = (postId, userName, content) => {
		content && dispatch(addCommentAsync(requestServer, postId, userName, content));
		setNewComment('');
	};

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						value={newComment}
						onChange={({ target }) => setNewComment(target.value)}
						placeholder="Комментарий..."
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						margin="0 0 0 10px"
						size="21px"
						onClick={() => onNewCommentAdd(postId, userName, newComment)}
					/>
				</div>
			)}

			<div className="comments">
				{comments.map((commentProps) => {
					return (
						<Comment
							key={commentProps.id}
							id={commentProps.id}
							commentProps={commentProps}
							roleId={roleId}
						/>
					);
				})}
			</div>
		</div>
	);
};

export const PostComments = styled(PostCommentsContainer)`
	width: 580px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;

	.new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}

	.new-comment textarea {
		width: 100%;
		height: 120px;
		resize: none;
		font-size: 18px;
	}
`;

PostComments.propTypes = {
	postId: PropTypes.string.isRequired,
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
};
