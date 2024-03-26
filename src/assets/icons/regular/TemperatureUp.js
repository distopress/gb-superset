const SvgTemperatureUp = (props) => (
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
			d="M4 12a5 5 0 1 0 6 0M4 12V3h6v9M10 3h2M10 6h2M10 9h2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6M19 18V6m0 0 2.5 2.5M19 6l-2.5 2.5"
		/>
	</svg>
);
export default SvgTemperatureUp;
