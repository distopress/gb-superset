const SvgSeaWaves = (props) => (
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
			d="M3 10c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3 4.965-3 4.965-3 2.483 3 4.345 3M3 17c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3 4.965-3 4.965-3 2.483 3 4.345 3"
		/>
	</svg>
);
export default SvgSeaWaves;
