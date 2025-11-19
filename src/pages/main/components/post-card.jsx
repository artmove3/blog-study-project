import styled from 'styled-components';
import { Icon } from '../../../components/icon/icon';
import { Link } from 'react-router-dom';

const PostCardContainer = ({ className, props }) => {
	const { id, title, imageUrl, publishedAt, commentCount } = props;

	return (
		<div className={className}>
			<Link to={`posts/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								id="fa-calendar-o"
								margin="0 10px 0 0"
								font-size="18px"
								inActive={true}
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								id="fa-comment-o"
								margin="0 10px 0 0"
								font-size="18px"
								inActive={true}
							/>
							{commentCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid #000;
	img {
		display: block;
		width: 100%;
	}

	.post-card-footer {
		border-top: 1px solid #000;
		padding: 5px;
	}

	h4 {
		margin: 0;
	}

	.post-card-info {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}

	.published-at {
		display: flex;
	}

	.comments-count {
		display: flex;
	}
`;
