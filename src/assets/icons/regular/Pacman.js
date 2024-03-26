const SvgPacman = (props) => (
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
			d="m16 12 .011.01M19 12l.011.01M22 12l.011.01M2 12c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8-3.999L12 12l8-6.001A9.99 9.99 0 0 0 12 2C6.477 2 2 6.477 2 12"
		/>
	</svg>
);
export default SvgPacman;
