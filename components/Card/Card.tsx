import React from 'react';
import { useEffect } from 'react';
import { SELECT_CARD } from '../../Events/';
import { Button } from '../Button/';
import { CardProps } from './interface';
import {
	StyledCard,
	StyledCardTitle,
	StyledCardImage,
} from './Card.styled';

export const Card: React.FC<CardProps> = ({ item, categoryId, }) => {
	const selectCard = () => {
		globalThis.events.dispatch(SELECT_CARD, {item, categoryId});
	};

	return (
		<StyledCard className={item?.selected ? `selected` : undefined}>
			<StyledCardTitle className="card-title">{item.title}</StyledCardTitle>
			<StyledCardImage src={item.photoUrL} alt={item.id} />
			<Button action={selectCard} label="Select" />
		</StyledCard>
	);
};
