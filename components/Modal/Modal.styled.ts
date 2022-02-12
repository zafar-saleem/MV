import styled from 'styled-components';

export const ModalDrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000000;
	opacity: .8;
	z-index: 1;
`;

export const ModalContainer = styled.div`
	position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	width: 50%;
	padding: 1rem;
	color: #000000;
	border-radius: .25rem;
	background-color: #FFFFFF;
	z-index: 100;
`;

export const StyledCloseButton = styled.span`
	position: fixed;
	top: .15rem;
	right: .50rem;
	font-size: 1.50rem;
	transform: rotate(45deg);
	cursor: pointer;
`;