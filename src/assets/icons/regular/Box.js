const SvgBox = (props) => (
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
			d="M10 12h4M3 3h18M21 7v13.4a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V7"
		/>
	</svg>
);
export default SvgBox;
