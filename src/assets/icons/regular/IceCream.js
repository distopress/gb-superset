const SvgIceCream = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<path stroke="currentColor" d="M14 18v2a2 2 0 1 1-4 0v-2M5 12h14" />
		<path
			stroke="currentColor"
			d="M7 18a2 2 0 0 1-2-2V9a7 7 0 1 1 14 0v7a2 2 0 0 1-2 2z"
		/>
	</svg>
);
export default SvgIceCream;
