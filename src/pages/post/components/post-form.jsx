import styled from 'styled-components';
import { Input } from '../../../components/input/input';
import { SpecialPanel } from './special-panel/special-panel';
import { useRef } from 'react';
import { sanitizeContent } from './utils/sanitize-content';
import { useDispatch } from 'react-redux';
import { savePostAsync } from '../../../actions/save-post-async';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../hooks/use-server-request';

const PostFormContainer = ({ className, post }) => {
	const { id, title, imageUrl, content, publishedAt } = post;

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const requestServer = useServerRequest();

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);
		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent,
			}),
		).then(navigate(`/posts/${id}`));
	};

	return (
		<div className={className}>
			<Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение..." />
			<Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
			<SpecialPanel
				iconId="fa-floppy-o"
				publishedAt={publishedAt}
				onClick={onSave}
			/>
			<div
				ref={contentRef}
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
