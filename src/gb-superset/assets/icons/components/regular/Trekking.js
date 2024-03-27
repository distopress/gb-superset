const SvgTrekking = (props) => (
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
			d="m18 10-3 1.5-4-3-1 5.5 3.5 3 .5 4.5M18 8.5v13M10 17l-2 4.5M8.5 8.5C7 9.5 6 12 6 12l2 1M12 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
		/>
	</svg>
);
export default SvgTrekking;
