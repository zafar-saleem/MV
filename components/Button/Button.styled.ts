import styled from 'styled-components';

export const StyledButton = styled.button`
	position: ${props => props.type !== undefined ? `fixed` : null};
	display: ${props => props.type === undefined ? `block` : null};
	right: 1.25rem;
	bottom: 1rem;
	margin: ${props => props.type === undefined ? `auto`: null};
	margin-top: ${props => props.type !== undefined ? `2rem`: null};
	padding: .50rem 1rem;
	color: #FFFFFF;
	border-radius: .25rem;
	border: 1px solid #009B86;
	background-color: #009B86;
	z-index: 0;

	&:hover {
		cursor: pointer;
		background-color: ${props => props.type !== undefined ? `#34AC9C` : `#009B86`}
	}
`;