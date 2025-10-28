import styled from 'styled-components';
import { H2 } from '../../../components/h2/h2';
import { Icon } from '../../../components/icon/icon';

const PostContentContainer = ({ className, post }) => {
	const { id, title, imageUrl, content, publishedAt } = post;
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon
						id="fa-calendar-o"
						margin="0 10px 0 0"
						cursor="pointer"
						font-size="18px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
				<div className="buttons-panel">
					<Icon
						id="fa-pencil-square-o"
						margin="0 10px 0 0"
						cursor="pointer"
						size="21px"
						onClick={() => {}}
					/>
					<Icon
						id="fa-trash-o"
						cursor="pointer"
						size="21px"
						onClick={() => {}}
					/>
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	img {
		float: left;
		margin: 0 20px 10px 0;
	}

	.special-panel {
		margin: -20px 0 20px;
		display: flex;
		justify-content: space-between;
	}

	.published-at {
		display: flex;
		align-items: center;
	}

	i {
		position: relative;
		top: -4px;
	}

	.buttons-panel {
		display: flex;
	}

	.post-text {
		font-size: 18px;
	}
`;
