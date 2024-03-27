const SvgWhiteFlag = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="none"
		viewBox="0 0 24 24"
		{...props}
	>
		<path
			fill="currentColor"
			d="m20.94 4.654-.89 9.8a.6.6 0 0 1-.598.546H5l.95-10.454A.6.6 0 0 1 6.548 4h13.795a.6.6 0 0 1 .598.654"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			d="m5 15 .95-10.454A.6.6 0 0 1 6.548 4h13.795a.6.6 0 0 1 .598.654l-.891 9.8a.6.6 0 0 1-.598.546zm0 0-.6 6"
		/>
	</svg>
);
export default SvgWhiteFlag;
