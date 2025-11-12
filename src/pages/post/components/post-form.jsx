import styled from 'styled-components';
import { Input } from '../../../components/input/input';
import { SpecialPanel } from './special-panel/special-panel';
import { useLayoutEffect, useRef, useState } from 'react';
import { sanitizeContent } from './utils/sanitize-content';
import { useDispatch } from 'react-redux';
import { savePostAsync } from '../../../actions/save-post-async';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../hooks/use-server-request';

const PostFormContainer = ({ className, post }) => {
	const { id, title, imageUrl, content, publishedAt } = post;

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	const requestServer = useServerRequest();

	// ставим новые данные в локальный стейт при их изменении
	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);
		// при создании новой статьи id берется из response после отработки fetch с методом POST
		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/posts/${id}`));
	};

	const onImageValueChange = ({ target }) => setImageUrlValue(target.value);

	const onTitleValueChange = ({ target }) => setTitleValue(target.value);

	return (
		<div className={className}>
			<Input
				onChange={onImageValueChange}
				value={imageUrlValue}
				placeholder="Изображение..."
			/>
			<Input
				onChange={onTitleValueChange}
				value={titleValue}
				placeholder="Заголовок..."
			/>
			<SpecialPanel
				postId={id}
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
		min-height: 80px;
		font-size: 18px;
		border: 1px solid #000;
	}
`;
