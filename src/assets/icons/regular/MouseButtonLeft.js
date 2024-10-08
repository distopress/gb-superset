const SvgMouseButtonLeft = (props) => (
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
			d="M20 10v4a8 8 0 1 1-16 0V9a7 7 0 0 1 7-7h1a8 8 0 0 1 8 8Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M12 2v6.4a.6.6 0 0 1-.6.6H4"
		/>
	</svg>
);
export default SvgMouseButtonLeft;
