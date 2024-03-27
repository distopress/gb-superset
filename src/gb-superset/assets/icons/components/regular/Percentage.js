const SvgPercentage = (props) => (
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
			d="M17 19a2 2 0 1 1 0-4 2 2 0 0 1 0 4M7 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19 5 5 19"
		/>
	</svg>
);
export default SvgPercentage;
