const SvgFx = (props) => (
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
			d="M3 17V7h7M3 12h5M13 17l4-5m0 0 4-5m-4 5-4-5m4 5 4 5"
		/>
	</svg>
);
export default SvgFx;
