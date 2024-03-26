const SvgAlignHorizontalSpacing = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M3 22V2M21 22V2"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			d="M15 16H9a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"
		/>
	</svg>
);
export default SvgAlignHorizontalSpacing;
