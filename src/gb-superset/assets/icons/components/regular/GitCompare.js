const SvgGitCompare = (props) => (
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
			d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 17V7s0-2-2-2h-3M6 7v10s0 2 2 2h3"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15 7.5 12.5 5 15 2.5M8.5 16.5 11 19l-2.5 2.5"
		/>
	</svg>
);
export default SvgGitCompare;
