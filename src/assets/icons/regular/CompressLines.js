const SvgCompressLines = (props) => (
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
			d="M18 2H6M18 22H6M12 5v5m0 0 3-3m-3 3L9 7M12 19v-5m0 0 3 3m-3-3-3 3"
		/>
	</svg>
);
export default SvgCompressLines;
