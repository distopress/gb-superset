const SvgLongArrowUpRight = (props) => (
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
			d="m13.25 4.75 3.5 3.5-3.5 3.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16.75 8.25h-6a4 4 0 0 0-4 4v7"
		/>
	</svg>
);
export default SvgLongArrowUpRight;
