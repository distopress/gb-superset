const SvgPeopleTag = (props) => (
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
			d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M15.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
		/>
	</svg>
);
export default SvgPeopleTag;
