const SvgUnionAlt = (props) => (
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
			d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
		/>
	</svg>
);
export default SvgUnionAlt;
