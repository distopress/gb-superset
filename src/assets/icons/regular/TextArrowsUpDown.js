const SvgTextArrowsUpDown = (props) => (
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
			d="M18 21V11m0 10-2-2.5m2 2.5 2-2.5M18 11l-2 2m2-2 2 2M9 5v12m0 0H7m2 0h2M15 7V5H3v2"
		/>
	</svg>
);
export default SvgTextArrowsUpDown;
