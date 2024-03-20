const SvgSortDown = (props) => (
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
			d="M14 10H2M10 14H2M6 18H2M18 6H2M19 10v10m0 0 3-3m-3 3-3-3"
		/>
	</svg>
);
export default SvgSortDown;
