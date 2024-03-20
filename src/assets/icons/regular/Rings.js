const SvgRings = (props) => (
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
			d="M8 8a6 6 0 1 0 0 12A6 6 0 0 0 8 8m0 0V3"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 0V3"
		/>
	</svg>
);
export default SvgRings;
