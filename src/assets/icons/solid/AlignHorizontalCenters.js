const SvgAlignHorizontalCenters = (props) => (
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
			d="M12 22V2"
		/>
		<path
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			d="M19 16H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"
		/>
	</svg>
);
export default SvgAlignHorizontalCenters;
