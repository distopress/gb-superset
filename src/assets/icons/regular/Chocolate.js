const SvgChocolate = (props) => (
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
			d="M19 6.5c-3 0-4.5-.5-4.5-3.5H5v18h14zM19 15H5M5 9h14M12 21V3"
		/>
	</svg>
);
export default SvgChocolate;
