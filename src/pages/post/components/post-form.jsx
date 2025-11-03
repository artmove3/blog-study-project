import styled from 'styled-components';
import { H2 } from '../../../components/h2/h2';
import { Icon } from '../../../components/icon/icon';
import { Input } from '../../../components/input/input';
import { SpecialPanel } from './special-panel/special-panel';

const PostFormContainer = ({ className, post }) => {
	const { id, title, imageUrl, content, publishedAt } = post;
	return (
		<div className={className}>
			<Input defaultValue={imageUrl} />
			<Input defaultValue={title} />
			<SpecialPanel iconId={'fa-floppy-o'} publishedAt={publishedAt} />
			<div
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

export const PostForm = styled(PostFormContainer)`
	img {
		float: left;
		margin: 0 20px 10px 0;
	}

	.post-text {
		font-size: 18px;
	}
`;
