const SvgBounceLeft = (props) => (
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
			d="M6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4M21 15.5c-3-1-5.5-.5-8 4.5-.5-3-2-7.5-3.5-10"
		/>
	</svg>
);
export default SvgBounceLeft;
