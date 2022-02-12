export interface ButtonProps {
	label: string;
	type: "button" | "submit" | "reset" | undefined;
	action: () => void;
}