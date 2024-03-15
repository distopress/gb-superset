const SvgArrowLeft = (props) => (
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
			d="M21 12H3m0 0 8.5-8.5M3 12l8.5 8.5"
		/>
	</svg>
);
export default SvgArrowLeft;
