const SvgArrowsUpFromLine = (props) => (
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
			d="M3 20h18M6 17V4m0 0L2 8m4-4 4 4M18 17V4m0 0-4 4m4-4 4 4"
		/>
	</svg>
);
export default SvgArrowsUpFromLine;
