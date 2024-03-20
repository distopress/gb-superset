const SvgUserCircle = (props) => (
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
			d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
		/>
		<circle cx={12} cy={12} r={10} stroke="currentColor" />
	</svg>
);
export default SvgUserCircle;
