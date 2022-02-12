import React from 'react';
import { SELECT_CARD } from '../../Events/';
import { ButtonProps } from './interface';
import { StyledButton } from './Button.styled';

export const Button: React.FC<ButtonProps> = ({ label, type, action }) => {
	return (
		<StyledButton onClick={action} type={type}>{label}</StyledButton>
	);
}