const SvgStatsReport = (props) => (
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
			d="M10 9H6M15.5 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M6 6h3M18 18l-4.5-3-2.5 2-5-4"
		/>
		<path
			stroke="currentColor"
			d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
		/>
	</svg>
);
export default SvgStatsReport;
