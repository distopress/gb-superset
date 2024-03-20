const SvgArrowEnlargeTag = (props) => (
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
			d="M8.5 9.5 6 12l2.5 2.5M15.5 9.5 18 12l-2.5 2.5"
		/>
		<path
			stroke="currentColor"
			d="M2 15V9a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"
		/>
	</svg>
);
export default SvgArrowEnlargeTag;
