const SvgVerticalSplit = (props) => (
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
			d="M12 14v8m0 0 3.5-3.5M12 22l-3.5-3.5M12 10V2m0 0 3.5 3.5M12 2 8.5 5.5M3 14h18M3 10h18"
		/>
	</svg>
);
export default SvgVerticalSplit;
