const SvgFigma = (props) => (
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
			d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3M12 3h3a3 3 0 0 1 0 6h-3z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0M6 18a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3"
		/>
	</svg>
);
export default SvgFigma;
