const SvgGroup = (props) => (
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
			d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
		/>
	</svg>
);
export default SvgGroup;
