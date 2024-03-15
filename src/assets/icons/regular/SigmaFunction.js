const SvgSigmaFunction = (props) => (
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
			d="M4 4h16v3M4 20h16v-3M4 20l8-8-8-8"
		/>
	</svg>
);
export default SvgSigmaFunction;
