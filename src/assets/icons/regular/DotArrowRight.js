const SvgDotArrowRight = (props) => (
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
			d="M4 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 12h13m0 0-3-3m3 3-3 3"
		/>
	</svg>
);
export default SvgDotArrowRight;
