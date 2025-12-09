import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/icon';
import { useDispatch } from 'react-redux';
import { removeCommentAsync } from '../../../actions/remove-comment-async';
import { useServerRequest } from '../../../hooks/use-server-request';
import { openModal } from '../../../actions/open-modal';
import { closeModal } from '../../../actions/close-modal';
import { checkAccess } from '../../../utils/check-access';
import { ROLE } from '../../../constants/role';
import { PROP_TYPE } from '../../../constants/prop-type';

const CommentContainer = ({ className, id, commentProps, roleId }) => {
	const { postId, userName, content, publishedAt } = commentProps;
	const isAdminOrModerator = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], roleId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const onDeleteCommentButton = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, id, postId));
					dispatch(closeModal());
				},
				onCancel: () => dispatch(closeModal()),
			}),
		);
		// dispatch(removeCommentAsync(requestServer, id, postId));
	};

	return (
		<div className={className}>
			<div className="comment-border">
				<div className="information-panel">
					<div className="author">
						<Icon
							inActive={true}
							id="fa-user-circle-o"
							cursor="pointer"
							size="21px"
							margin="0 5px 0 0"
						/>
						{userName}
					</div>
					<div className="published-at">
						<Icon
							inActive={true}
							id="fa-calendar-o"
							size="21px"
							margin="0 5px 0 0"
						/>
						{publishedAt}
					</div>
				</div>

				<div>{content}</div>
			</div>
			{isAdminOrModerator ? (
				<Icon
					id="fa-trash-o"
					cursor="pointer"
					size="21px"
					margin="0 5px 0 0"
					onClick={() => {
						onDeleteCommentButton(id);
					}}
				/>
			) : (
				<div className="placeholder"></div>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 5px 0 0 0;

	.comment-border {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 5px;
		border: 1px solid #000;
		margin: 0 10px 0 0;
	}

	.information-panel {
		display: flex;
		justify-content: space-between;
	}
	.author {
		display: flex;
	}

	.published-at {
		display: flex;
	}

	.placeholder {
		width: 22px;
	}
`;

Comment.propTypes = {
	id: PropTypes.number.isRequired,
	commentProps: PropTypes.shape({
		postId: PropTypes.string.isRequired,
		userName: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
	}),
	roleId: PROP_TYPE.ROLE,
};
