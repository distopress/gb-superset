const SvgAntennaSignal = (props) => (
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
			d="M17.5 8S19 9.5 19 12s-1.5 4-1.5 4M20.5 5S23 7.5 23 12s-2.5 7-2.5 7M6.5 8S5 9.5 5 12s1.5 4 1.5 4M3.5 5S1 7.5 1 12s2.5 7 2.5 7"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
		/>
	</svg>
);
export default SvgAntennaSignal;
