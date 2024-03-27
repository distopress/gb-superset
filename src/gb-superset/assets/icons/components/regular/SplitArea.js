const SvgSplitArea = (props) => (
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
			d="M20 20H4v-4h16zM2 12h20M7 4H4v3M11 4h2M17 4h3v3"
		/>
	</svg>
);
export default SvgSplitArea;
