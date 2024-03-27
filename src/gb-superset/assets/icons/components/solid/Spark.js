const SvgSpark = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M3 12c6.268 0 9-2.637 9-9 0 6.363 2.713 9 9 9-6.287 0-9 2.713-9 9 0-6.287-2.732-9-9-9Z"
		/>
	</svg>
);
export default SvgSpark;
