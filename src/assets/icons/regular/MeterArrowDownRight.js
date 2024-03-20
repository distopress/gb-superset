const SvgMeterArrowDownRight = (props) => (
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
			d="M2.5 3.5 7 8m0 0V4m0 4H3M15 16l-3.5-3.5"
		/>
		<path
			stroke="currentColor"
			d="M14.5 9C10.358 9 7 12.283 7 16.333a7.2 7.2 0 0 0 .733 3.165.93.93 0 0 0 .84.502h11.853a.93.93 0 0 0 .841-.502A7.2 7.2 0 0 0 22 16.333C22 12.283 18.642 9 14.5 9Z"
		/>
	</svg>
);
export default SvgMeterArrowDownRight;
