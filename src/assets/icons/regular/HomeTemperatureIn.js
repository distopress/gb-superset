const SvgHomeTemperatureIn = (props) => (
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
			d="m2 8 9.732-4.866a.6.6 0 0 1 .536 0L22 8M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 7.5V14M12 12h2M12 9h2"
		/>
	</svg>
);
export default SvgHomeTemperatureIn;
