const SvgRedoAction = (props) => (
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
			d="M19 5v6M15.5 8H9q0 0 0 0s-5 0-5 4.706C4 18 9 18 9 18h8.714"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12.5 11.5 16 8l-3.5-3.5"
		/>
	</svg>
);
export default SvgRedoAction;
