const SvgCart = (props) => (
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
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M5 4h17l-2 11H7zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5"
		/>
	</svg>
);
export default SvgCart;
