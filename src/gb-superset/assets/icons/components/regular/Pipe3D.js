const SvgPipe3D = (props) => (
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
			d="M10 20a6 6 0 1 1 0-12 6 6 0 0 1 0 12M10.773 4.742a6 6 0 0 1 8.7 8.258M3 21l6.5-6.5M21 3l-1.5 1.5M6 9.5 10.5 5l.25-.25M14.5 18l4.719-4.719"
		/>
	</svg>
);
export default SvgPipe3D;
