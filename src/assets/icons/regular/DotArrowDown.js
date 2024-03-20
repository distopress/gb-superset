const SvgDotArrowDown = (props) => (
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
			d="M12 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 9v13m0 0 3-3m-3 3-3-3"
		/>
	</svg>
);
export default SvgDotArrowDown;
