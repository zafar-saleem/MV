interface Item {
	selected?: boolean;
	title: string;
	id: string;
	photoUrL: string;
}

export interface CardProps {
	categoryId: string;
	item: Item;
}