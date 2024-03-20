const SvgScissor = (props) => (
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
			d="M7.236 7a3 3 0 1 0-4.472-4 3 3 0 0 0 4.472 4m0 0L20 18M7.236 17a3 3 0 1 1-4.472 4 3 3 0 0 1 4.472-4m0 0L20 6"
		/>
	</svg>
);
export default SvgScissor;
