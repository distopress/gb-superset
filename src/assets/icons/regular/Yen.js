const SvgYen = (props) => (
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
			d="M6 12h12M6 4l6 8m6-8-6 8m0 0v8M6 16h12"
		/>
	</svg>
);
export default SvgYen;
