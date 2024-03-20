const SvgKeyBack = (props) => (
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
			d="M14 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0m0 0H2v3M6 12v3"
		/>
	</svg>
);
export default SvgKeyBack;
