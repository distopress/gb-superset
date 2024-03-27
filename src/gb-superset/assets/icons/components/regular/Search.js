const SvgSearch = (props) => (
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
			d="m17 17 4 4M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0"
		/>
	</svg>
);
export default SvgSearch;
