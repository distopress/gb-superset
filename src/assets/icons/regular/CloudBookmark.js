const SvgCloudBookmark = (props) => (
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
			d="M8.5 12h7v10L12 20l-3.5 2z"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M20 17.607c1.494-.585 3-1.918 3-4.607 0-4-3.333-5-5-5 0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5 0 2.689 1.506 4.022 3 4.607"
		/>
	</svg>
);
export default SvgCloudBookmark;
