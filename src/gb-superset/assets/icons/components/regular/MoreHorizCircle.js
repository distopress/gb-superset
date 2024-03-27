const SvgMoreHorizCircle = (props) => (
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
			d="M7 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M17 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
		/>
	</svg>
);
export default SvgMoreHorizCircle;
