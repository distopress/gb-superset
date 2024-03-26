const SvgNetworkLeft = (props) => (
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
			x={2}
			y={21}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={0.6}
			transform="rotate(-90 2 21)"
		/>
		<rect
			width={7}
			height={5}
			x={17}
			y={15.5}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={0.6}
			transform="rotate(-90 17 15.5)"
		/>
		<rect
			width={7}
			height={5}
			x={2}
			y={10}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={0.6}
			transform="rotate(-90 2 10)"
		/>
		<path
			stroke="currentColor"
			strokeWidth={1.5}
			d="M7 17.5h3.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7M12.5 12H17"
		/>
	</svg>
);
export default SvgNetworkLeft;
