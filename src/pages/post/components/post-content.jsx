import styled from 'styled-components';
import { H2 } from '../../../components/h2/h2';
import { Icon } from '../../../components/icon/icon';
import { SpecialPanel } from './special-panel/special-panel';

const PostContentContainer = ({ className, post }) => {
	const { id, title, imageUrl, content, publishedAt } = post;
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<SpecialPanel iconId={'fa-pencil-square-o'} publishedAt={publishedAt} />
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	img {
		float: left;
		margin: 0 20px 10px 0;
	}

	.post-text {
		font-size: 18px;
	}
`;
