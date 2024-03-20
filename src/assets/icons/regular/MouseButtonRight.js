const SvgMouseButtonRight = (props) => (
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
			d="M4 10v4a8 8 0 1 0 16 0V9a7 7 0 0 0-7-7h-1a8 8 0 0 0-8 8Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M12 2v6.4a.6.6 0 0 0 .6.6H20"
		/>
	</svg>
);
export default SvgMouseButtonRight;
