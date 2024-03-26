const SvgArrowDownRight = (props) => (
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
			d="m6 6 13 13m0 0V6.52M19 19H6.52"
		/>
	</svg>
);
export default SvgArrowDownRight;
