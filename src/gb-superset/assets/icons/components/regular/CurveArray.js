const SvgCurveArray = (props) => (
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
			d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A17 17 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
		/>
		<path
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
		/>
	</svg>
);
export default SvgCurveArray;
