const SvgMultiBubble = (props) => (
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
			d="M7.5 22a5.5 5.5 0 1 0-4.764-2.75l-.461 2.475 2.475-.46A5.5 5.5 0 0 0 7.5 22"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15.282 17.898A8 8 0 0 0 18 16.93l3.6.67-.67-3.6A8 8 0 1 0 6.083 8.849"
		/>
	</svg>
);
export default SvgMultiBubble;
