const SvgFastArrowLeft = (props) => (
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
			d="m11 6-6 6 6 6M19 6l-6 6 6 6"
		/>
	</svg>
);
export default SvgFastArrowLeft;
