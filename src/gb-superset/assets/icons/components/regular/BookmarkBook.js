const SvgBookmarkBook = (props) => (
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
			d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8 3v8l2.5-1.6L13 11V3"
		/>
		<path stroke="currentColor" strokeLinecap="round" d="M6 17h14M6 21h14" />
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 21a2 2 0 1 1 0-4"
		/>
	</svg>
);
export default SvgBookmarkBook;
