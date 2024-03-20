const SvgTextMagnifyingGlass = (props) => (
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
			d="M19.5 19.5 21 21M14 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9 5v12m0 0H7m2 0h2M15 7V5H3v2"
		/>
	</svg>
);
export default SvgTextMagnifyingGlass;
