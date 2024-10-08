const SvgTvFix = (props) => (
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
			d="M2 20V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m13.657 12.828-2.829 2.829M16.485 12.828A2 2 0 1 1 13.657 10M10.828 18.485A2 2 0 0 0 8 15.657M8.5 2.5 12 6l3.5-3.5"
		/>
	</svg>
);
export default SvgTvFix;
