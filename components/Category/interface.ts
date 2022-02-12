interface Items {
	selected?: boolean;
	title: string;
	id: string;
	photoUrL: string;
}

export interface CategoryProps {
	title: string;
	id: string;
	items: Items[];
}