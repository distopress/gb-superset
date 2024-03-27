const SvgStretching = (props) => (
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
			d="M16 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 20l4.91-.524 2.726-5.238L13.727 9l-4.909 1.048 1.636 2.095M14.818 15.286H17V20"
		/>
	</svg>
);
export default SvgStretching;
