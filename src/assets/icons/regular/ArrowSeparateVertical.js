const SvgArrowSeparateVertical = (props) => (
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
			d="m17 8-5-5-5 5M17 16l-5 5-5-5"
		/>
	</svg>
);
export default SvgArrowSeparateVertical;
