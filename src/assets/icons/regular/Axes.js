const SvgAxes = (props) => (
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
			d="m21 19.452-9-6.61m0 0V3m0 9.843-9 6.609M20.438 16.71 21 19.452 18.188 20M9.75 5.194 12 3l2.25 2.194M5.813 20 3 19.452l.563-2.742"
		/>
	</svg>
);
export default SvgAxes;
