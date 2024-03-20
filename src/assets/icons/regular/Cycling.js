const SvgCycling = (props) => (
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
			d="M14 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6M11.5 18l1.5-4-4.882-2 3-3.5 3 2.5h3.5"
		/>
	</svg>
);
export default SvgCycling;
