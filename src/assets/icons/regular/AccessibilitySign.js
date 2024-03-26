const SvgAccessibilitySign = (props) => (
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
			d="m11.5 12.5 7-.5-1.5 6.5M11.5 12.5l4.5-5L12.5 5 10 7.5M18.5 6.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M5.5 12.5a5 5 0 0 1 7.584 6M3.729 15A5 5 0 0 0 11 20.831"
		/>
	</svg>
);
export default SvgAccessibilitySign;
