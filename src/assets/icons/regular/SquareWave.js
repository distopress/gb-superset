const SvgSquareWave = (props) => (
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
			d="M3 12h3V4h6v16h6v-8h3M14.5 12h1M8.5 12h1"
		/>
	</svg>
);
export default SvgSquareWave;
