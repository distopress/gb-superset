const SvgDirectorChair = (props) => (
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
			d="M19 12 5 21M5 3v9M19 3v9M5 12l14 9M4 12h16"
		/>
		<path stroke="currentColor" strokeLinejoin="round" d="M5 4h14M5 7h14" />
	</svg>
);
export default SvgDirectorChair;
