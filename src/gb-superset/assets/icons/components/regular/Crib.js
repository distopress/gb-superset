const SvgCrib = (props) => (
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
			d="M3 5v16"
		/>
		<path
			stroke="currentColor"
			strokeLinejoin="round"
			d="M3 16h18M3 7h18M18 16V7M14 16V7M10 16V7M6 16V7M3 19h18"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 5v16M21 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
		/>
	</svg>
);
export default SvgCrib;
