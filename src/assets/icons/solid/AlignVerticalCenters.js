const SvgAlignVerticalCenters = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M22 12H2"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			d="M8 19V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z"
		/>
	</svg>
);
export default SvgAlignVerticalCenters;
