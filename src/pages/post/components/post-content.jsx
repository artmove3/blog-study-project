import styled from 'styled-components';
import { H2 } from '../../../components/h2/h2';
import { SpecialPanel } from './special-panel/special-panel';
import { useNavigate } from 'react-router-dom';
import { PROP_TYPE } from '../../../constants/prop-type';

const PostContentContainer = ({ className, post }) => {
	const { id, title, imageUrl, content, publishedAt } = post;

	const navigate = useNavigate();

	const onEditButtonClick = () => navigate(`/posts/${id}/edit`);

	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<SpecialPanel
				postId={id}
				iconId="fa-pencil-square-o"
				onClick={onEditButtonClick}
				publishedAt={publishedAt}
			/>
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

PostContent.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};
