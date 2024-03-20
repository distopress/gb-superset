const SvgExpandLines = (props) => (
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
			d="M18 2H6M18 22H6M12 14v5m0 0 3-3m-3 3-3-3M12 10V5m0 0 3 3m-3-3L9 8"
		/>
	</svg>
);
export default SvgExpandLines;
