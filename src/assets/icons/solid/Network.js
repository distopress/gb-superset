const SvgNetwork = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<rect
			width={7}
			height={5}
			x={3}
			y={2}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={0.6}
		/>
		<rect
			width={7}
			height={5}
			x={8.5}
			y={17}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={0.6}
		/>
		<rect
			width={7}
			height={5}
			x={14}
			y={2}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={0.6}
		/>
		<path
			stroke="currentColor"
			strokeWidth={1.5}
			d="M6.5 7v3.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7M12 12.5V17"
		/>
	</svg>
);
export default SvgNetwork;
