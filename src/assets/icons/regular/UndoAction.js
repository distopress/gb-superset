const SvgUndoAction = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M5 5v6M8.5 8H15q0 0 0 0s5 0 5 4.706C20 18 15 18 15 18H6.286"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.5 11.5 8 8l3.5-3.5"
		/>
	</svg>
);
export default SvgUndoAction;
