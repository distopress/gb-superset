const SvgBoldSquare = (props) => (
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
			d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
		/>
		<path
			stroke="currentColor"
			d="M12 12H9m3 0s2.5 0 2.5-2.5S12 7 12 7H9.6a.6.6 0 0 0-.6.6V12m3 0s3 0 3 2.75-3 2.75-3 2.75H9.6a.6.6 0 0 1-.6-.6V12"
		/>
	</svg>
);
export default SvgBoldSquare;
