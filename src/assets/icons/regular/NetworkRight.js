const SvgNetworkRight = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		strokeWidth={1.5}
		viewBox="0 0 24 24"
		{...props}
	>
		<rect
			width={7}
			height={5}
			stroke="currentColor"
			rx={0.6}
			transform="matrix(0 -1 -1 0 22 21)"
		/>
		<rect
			width={7}
			height={5}
			stroke="currentColor"
			rx={0.6}
			transform="matrix(0 -1 -1 0 7 15.5)"
		/>
		<rect
			width={7}
			height={5}
			stroke="currentColor"
			rx={0.6}
			transform="matrix(0 -1 -1 0 22 10)"
		/>
		<path
			stroke="currentColor"
			d="M17 17.5h-3.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2H17M11.5 12H7"
		/>
	</svg>
);
export default SvgNetworkRight;
