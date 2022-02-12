import React from 'react';
import  { ModalProps } from './interface';
import {
	ModalDrop,
	ModalContainer,
	StyledCloseButton,
} from './Modal.styled';

export const Modal: React.FC<ModalProps> = ({ setState, message }) => {
	return (
		<>
			<ModalContainer>
				<StyledCloseButton onClick={setState}>+</StyledCloseButton>
				{message}
			</ModalContainer>
			<ModalDrop></ModalDrop>
		</>
	);
}