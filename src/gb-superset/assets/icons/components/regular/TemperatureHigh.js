const SvgTemperatureHigh = (props) => (
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
			d="M6 12a5 5 0 1 0 6 0M6 12V3h6v9M12 3h2M12 6h2M12 9h2M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6"
		/>
	</svg>
);
export default SvgTemperatureHigh;
