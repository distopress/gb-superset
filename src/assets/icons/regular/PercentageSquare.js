const SvgPercentageSquare = (props) => (
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
			d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m16 8-8 8"
		/>
	</svg>
);
export default SvgPercentageSquare;
