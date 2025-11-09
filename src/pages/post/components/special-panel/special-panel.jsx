import styled from 'styled-components';
import { Icon } from '../../../../components/icon/icon';

const SpecialPanelContainer = ({ className, iconId, publishedAt, onClick }) => {
	return (
		<div className={className}>
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
					id={iconId}
					margin="0 10px 0 0"
					cursor="pointer"
					size="21px"
					onClick={onClick}
				/>
				<Icon id="fa-trash-o" cursor="pointer" size="21px" onClick={() => {}} />
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
