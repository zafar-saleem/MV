import React from 'react';
import { Card } from '../Card/';
import { CategoryProps } from './interface';
import {
	StyledContainer,
	StyledHeader,
	StyledCardContainer,
} from './Category.styled';

export const Category: React.FC<CategoryProps> = ({ title, items, id, }) => {
	return (
		<StyledContainer>
			<StyledHeader>
				{title}
			</StyledHeader>
			<StyledCardContainer>
				{
					items.map((item, index) => (
						<Card key={`${item.id}-${index}`} item={item} categoryId={id} />
					))
				}
			</StyledCardContainer>
		</StyledContainer>
	);
}