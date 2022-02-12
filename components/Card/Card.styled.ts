import styled from 'styled-components';

export const StyledCard = styled.div`
	padding: 1rem;
	text-align: center;
	border-radius: .25rem;
	background-color: #FFF;
	transition: all 0.2s ease-in-out;

	&.selected {
		background-color: #009B86;
	}

	&:hover {
		background-color: #34AC9C;

		.card-title {
			color: #CCCCCC;
		}
	}
`;

export const StyledCardTitle = styled.h5`
	color: #0D2436;
	font-weight: 300;
	text-align: center;
`;

export const StyledCardImage = styled.img`
	width: 8rem;
  height: 8rem;
  margin-bottom: 1rem;
	border-radius: 50%;
`;