import styled from 'styled-components';
import { Button } from '../button/button';
import { useSelector } from 'react-redux';
import { selectModal } from '../../selectors/select-modal';
const ModalContainer = ({ className }) => {
	const { isOpen, text, onConfirm, onCancel } = useSelector(selectModal);

	return isOpen ? (
		<div className={className}>
			<div className="overlay"></div>
			<div className="modal-box">
				<h3>{text}</h3>
				<div className="modal-buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	) : null;
};

export const Modal = styled(ModalContainer)`
	position: fixed;

	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 20;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	& .modal-box {
		position: relative;
		width: 400px;
		padding: 0 20px 20px;
		margin: 0 auto;
		text-align: center;
		top: 50%;
		transform: translate(0, -50%);
		background-color: #fff;
		border: 1px solid #000;
		z-index: 30;
	}

	& .modal-buttons {
		display: flex;
		justify-content: center;
	}

	.modal-buttons button {
		margin: 0 5px;
	}
`;
