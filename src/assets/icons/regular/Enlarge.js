const SvgEnlarge = (props) => (
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
			d="m15 9 5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4"
		/>
	</svg>
);
export default SvgEnlarge;
