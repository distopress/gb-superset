const SvgAgile = (props) => (
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
			d="M17.5 19H22m0 0-2.5-2.5M22 19l-2.5 2.5M12 2 9.5 4.5 12 7"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6.756 5.5A7.5 7.5 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5"
		/>
	</svg>
);
export default SvgAgile;
