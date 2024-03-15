const SvgAtSign = (props) => (
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
			d="M17.5 19.125A9 9 0 1 1 21 12c0 5.5-6 5.5-6 2V8"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M15 12v-1.5C15 9.12 13.657 8 12 8s-3 1.12-3 2.5V12M15 12v1.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5V12"
		/>
	</svg>
);
export default SvgAtSign;
