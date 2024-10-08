const SvgTwoSeaterSofa = (props) => (
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
			d="M2 16v3M12 13V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M12 13V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M20 9a2 2 0 0 0-2 2v2H6v-2a2 2 0 1 0-4 0v6h20v-6a2 2 0 0 0-2-2M22 16v3"
		/>
	</svg>
);
export default SvgTwoSeaterSofa;
