const SvgDatabaseSettings = (props) => (
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
			d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3M11 21c-7 0-7-3-7-3v-6M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
		/>
		<path
			stroke="currentColor"
			strokeDasharray="0.3 2"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
		/>
	</svg>
);
export default SvgDatabaseSettings;
