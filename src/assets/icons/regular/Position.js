const SvgPosition = (props) => (
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
			d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14M12 19v2M5 12H3M12 5V3M19 12h2"
		/>
	</svg>
);
export default SvgPosition;
