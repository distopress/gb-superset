const SvgFastArrowRight = (props) => (
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
			d="m13 6 6 6-6 6M5 6l6 6-6 6"
		/>
	</svg>
);
export default SvgFastArrowRight;
