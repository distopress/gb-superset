const SvgAntennaOff = (props) => (
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
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m7 23 1.111-4M17 23l-1.111-4M9.5 14l-1.389 5M9.5 14h4m-4 0 .8-2.88M8.11 19h7.778m0 0-1.184-4.264M11.445 7 12 5l1.047 3.768M3 3l18 18"
		/>
	</svg>
);
export default SvgAntennaOff;
