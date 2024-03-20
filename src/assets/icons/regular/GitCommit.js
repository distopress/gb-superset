const SvgGitCommit = (props) => (
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
			d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M9 12H3M15 12h6"
		/>
	</svg>
);
export default SvgGitCommit;
