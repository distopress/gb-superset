const SvgEvStation = (props) => (
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
			d="M21 5v4"
		/>
		<path
			stroke="currentColor"
			d="M5 19V9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"
		/>
		<path stroke="currentColor" d="M5 10V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5" />
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11.167 11 9.5 14h4l-1.667 3"
		/>
	</svg>
);
export default SvgEvStation;
