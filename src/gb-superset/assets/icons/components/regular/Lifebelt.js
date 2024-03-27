const SvgLifebelt = (props) => (
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
			d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0M9.235 14.89 5 19M14.765 14.89 19 19M14.765 9.11 19 5M9.235 9.11 5 5"
		/>
	</svg>
);
export default SvgLifebelt;
