const SvgSkateboard = (props) => (
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
			d="M6.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M2 9l3.333 1h13.334L22 9M17.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
		/>
	</svg>
);
export default SvgSkateboard;
