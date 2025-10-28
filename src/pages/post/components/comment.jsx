import styled from 'styled-components';
import { Icon } from '../../../components/icon/icon';

const CommentContainer = ({ className, commentProps }) => {
	const { postId, userName, content, publishedAt } = commentProps;

	const onDeleteCommentButton = () => {};

	return (
		<div className={className}>
			<div className="information-panel">
				<div className="author">
					<Icon
						id="fa-user-circle-o"
						cursor="pointer"
						size="21px"
						onClick={() => {}}
					/>
					{userName}
				</div>
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						cursor="pointer"
						size="21px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
			</div>

			<div>{content}</div>

			<Icon
				id="fa-trash-o"
				cursor="pointer"
				size="21px"
				onClick={() => {
					onDeleteCommentButton(postId);
				}}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	justify-content: space-between;
	width: 100%;
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
`;
