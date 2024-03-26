const SvgNpm = (props) => (
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
			d="M1 8h22v7H11v2H7.5v-2H1zM7.5 8v7M13.5 8v7"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			d="M18 11v4M5 11v4M11 11v1M20.5 11v4"
		/>
	</svg>
);
export default SvgNpm;
