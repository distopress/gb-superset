const SvgConstrainedSurface = (props) => (
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
			d="M3 23a2 2 0 1 1 0-4 2 2 0 0 1 0 4M21 23a2 2 0 1 1 0-4 2 2 0 0 1 0 4M3 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M21 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M13 12c0-1.246-1.158-2.5-2.572-2.5h-.857C8.152 9.5 7 10.62 7 12c0 1.19.855 2.185 2 2.438q.283.062.572.062"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M11 12c0 1.246 1.159 2.5 2.572 2.5h.857C15.849 14.5 17 13.38 17 12c0-1.19-.855-2.186-2-2.438a2.7 2.7 0 0 0-.572-.062M21 19V5M3 19V5M5 3h14M5 21h14"
		/>
	</svg>
);
export default SvgConstrainedSurface;
