const SvgPocket = (props) => (
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
			d="M21 6v5a9 9 0 1 1-18 0V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m8 10 4 4 4-4"
		/>
	</svg>
);
export default SvgPocket;
