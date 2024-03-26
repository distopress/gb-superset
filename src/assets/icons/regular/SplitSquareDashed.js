const SvgSplitSquareDashed = (props) => (
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
			d="M2 12h20M7 4H4v3M11 4h2M17 4h3v3M11 20h2M7 20H4v-3M17 20h3v-3"
		/>
	</svg>
);
export default SvgSplitSquareDashed;
