const SvgEaseInControlPoint = (props) => (
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
			d="M3 20c8 0 18-16 18-16M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-2M12 20h-2"
		/>
	</svg>
);
export default SvgEaseInControlPoint;
