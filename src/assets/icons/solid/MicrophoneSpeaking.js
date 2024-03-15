const SvgMicrophoneSpeaking = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<rect
			width={6}
			height={12}
			x={9}
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
			d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1M12 18v4m0 0H9m3 0h3"
		/>
	</svg>
);
export default SvgMicrophoneSpeaking;
