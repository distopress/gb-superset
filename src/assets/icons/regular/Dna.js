const SvgDna = (props) => (
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
			d="M4 3c0 5.625 8 9 8 9s8 3.375 8 9"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M20 3c0 5.625-8 9-8 9s-8 3.375-8 9M8 6h11M8 18h11M11 9h5.5M11 15h5.5"
		/>
	</svg>
);
export default SvgDna;
