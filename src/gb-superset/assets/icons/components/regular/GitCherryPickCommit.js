const SvgGitCherryPickCommit = (props) => (
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
			d="M17 11v-1a2 2 0 0 0-2-2h-3m-5 3v-1a2 2 0 0 1 2-2h3m0 0V4M12 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6M9 17H3M15 17h6"
		/>
	</svg>
);
export default SvgGitCherryPickCommit;
