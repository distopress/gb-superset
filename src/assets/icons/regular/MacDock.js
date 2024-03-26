const SvgMacDock = (props) => (
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
			d="M8 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M16 17a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M2 17.5l2-1M22 17.5l-2-1"
		/>
	</svg>
);
export default SvgMacDock;
