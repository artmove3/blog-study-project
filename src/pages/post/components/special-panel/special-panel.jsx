import styled from 'styled-components';
import { Icon } from '../../../../components/icon/icon';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../actions/open-modal';
import { closeModal } from '../../../../actions/close-modal';
import { useServerRequest } from '../../../../hooks/use-server-request';
import { removePostAsync } from '../../../../actions/remove-post-async';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, postId, iconId, publishedAt, onClick }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const onDeletePost = () => {
		dispatch(
			openModal({
				text: 'Удалить пост?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, postId)).then(() => {
						navigate('/');
					});
					dispatch(closeModal());
				},
				onCancel: () => dispatch(closeModal()),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						id="fa-calendar-o"
						margin="0 10px 0 0"
						font-size="18px"
						inActive={true}
					/>
				)}
				{publishedAt}
			</div>
			<div className="buttons-panel">
				<Icon id={iconId} size="21px" onClick={onClick} />
				{publishedAt && (
					<Icon
						id="fa-trash-o"
						margin="0 0 0 10px"
						size="21px"
						onClick={onDeletePost}
					/>
				)}
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: 20px 0;
	display: flex;
	justify-content: space-between;

	.published-at {
		display: flex;
		align-items: center;
	}

	.buttons-panel {
		display: flex;
	}

	i {
		position: relative;
		top: -4px;
	}
`;
