const SvgDivide = (props) => (
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
			d="M12 21v-9a5 5 0 0 0-5-5H3M12 21v-9a5 5 0 0 1 5-5h4"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M7 3 3 7l4 4M17 3l4 4-4 4"
		/>
	</svg>
);
export default SvgDivide;
