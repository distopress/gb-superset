const SvgDatabaseSearch = (props) => (
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
			d="M20.5 20.5 22 22M16 18.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M4 6v6s0 3 7 3 7-3 7-3V6"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3M11 21c-7 0-7-3-7-3v-6"
		/>
	</svg>
);
export default SvgDatabaseSearch;
