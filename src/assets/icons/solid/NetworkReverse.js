const SvgNetworkReverse = (props) => (
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
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={0.6}
			transform="matrix(1 0 0 -1 3 22)"
		/>
		<rect
			width={7}
			height={5}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={0.6}
			transform="matrix(1 0 0 -1 8.5 7)"
		/>
		<rect
			width={7}
			height={5}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={1.5}
			rx={0.6}
			transform="matrix(1 0 0 -1 14 22)"
		/>
		<path
			stroke="currentColor"
			strokeWidth={1.5}
			d="M6.5 17v-3.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V17M12 11.5V7"
		/>
	</svg>
);
export default SvgNetworkReverse;
