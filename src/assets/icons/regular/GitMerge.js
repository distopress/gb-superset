const SvgGitMerge = (props) => (
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
			d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 21V7"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 7v2c0 3.5 2.5 9 8.5 9H16M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
		/>
	</svg>
);
export default SvgGitMerge;
