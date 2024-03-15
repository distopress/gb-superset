const SvgFrameAltEmpty = (props) => (
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
			d="M6 3v18M18 3v18M3 6h18M3 18h18"
		/>
	</svg>
);
export default SvgFrameAltEmpty;
