const SvgLamp = (props) => (
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
			d="M9 21h3m3 0h-3m0 0V11m0-4v4m0 0H6l3-8h6l3 8z"
		/>
	</svg>
);
export default SvgLamp;
