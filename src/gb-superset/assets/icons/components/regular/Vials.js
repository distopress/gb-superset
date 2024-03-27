const SvgVials = (props) => (
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
			d="M21 21H3M9 12H5M19 12h-4M7 18a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2M17 18a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2"
		/>
	</svg>
);
export default SvgVials;
