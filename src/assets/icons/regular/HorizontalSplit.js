const SvgHorizontalSplit = (props) => (
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
			d="M10 12H2m0 0 3.5-3.5M2 12l3.5 3.5M14 12h8m0 0-3.5-3.5M22 12l-3.5 3.5M10 21V3M14 21V3"
		/>
	</svg>
);
export default SvgHorizontalSplit;
