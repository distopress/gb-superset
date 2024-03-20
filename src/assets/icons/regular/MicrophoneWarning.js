const SvgMicrophoneWarning = (props) => (
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
			d="M21 14v4M21 22.01l.01-.011"
		/>
		<rect width={6} height={12} x={7} y={2} stroke="currentColor" rx={3} />
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M10 18v4m0 0H7m3 0h3"
		/>
	</svg>
);
export default SvgMicrophoneWarning;
