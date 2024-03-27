const SvgLineSpace = (props) => (
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
			d="M11 6h10M11 12h10M11 18h10M5 19V5m0 14-2-2.5M5 19l2-2.5M5 5 3 7m2-2 2 2"
		/>
	</svg>
);
export default SvgLineSpace;
