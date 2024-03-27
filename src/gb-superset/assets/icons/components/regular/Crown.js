const SvgCrown = (props) => (
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
			d="M19.2 17 21 7l-6.3 3L12 7l-2.7 3L3 7l1.8 10z"
		/>
	</svg>
);
export default SvgCrown;
