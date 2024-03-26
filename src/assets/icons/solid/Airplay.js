const SvgAirplay = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M6 17H3V4h18v13h-3"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			d="M8.622 19.067 11.5 14.75a.6.6 0 0 1 .998 0l2.88 4.318a.6.6 0 0 1-.5.933H9.12a.6.6 0 0 1-.5-.933Z"
		/>
	</svg>
);
export default SvgAirplay;
