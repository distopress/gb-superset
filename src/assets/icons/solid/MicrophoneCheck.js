const SvgMicrophoneCheck = (props) => (
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
			d="m15.5 20.5 2 2 5-5"
		/>
		<rect
			width={6}
			height={12}
			x={5}
			y={2}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={3}
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M8 18v4m0 0H5m3 0h3"
		/>
	</svg>
);
export default SvgMicrophoneCheck;
