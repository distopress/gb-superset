const SvgArrowUnion = (props) => (
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
			d="m20 7-5 5 5 5M4 7l5 5-5 5"
		/>
	</svg>
);
export default SvgArrowUnion;
