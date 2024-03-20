const SvgBicycle = (props) => (
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
			d="M5 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8.5 7.5h6M19 15l-4-7.5h-.5m0 0 2-3m0 0H14m2.5 0h2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m5 15 3.5-7.5L12 14h3M8.5 7.5c-.333-1-1.5-3-3.5-3"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M19 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
		/>
	</svg>
);
export default SvgBicycle;
