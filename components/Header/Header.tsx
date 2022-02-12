import React from 'react';
import { HeaderProps } from './interface';
import { StyledTitle } from './Home.styled';

export const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<StyledTitle>{title}</StyledTitle>
	);
};
