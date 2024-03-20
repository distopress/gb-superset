const SvgDatabaseStats = (props) => (
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
			d="M4 6v6s0 3 7 3 7-3 7-3V6"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3M11 21c-7 0-7-3-7-3v-6"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M15 21v-2M18 21v-4M21 21v-6"
		/>
	</svg>
);
export default SvgDatabaseStats;
