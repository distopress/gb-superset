const SvgSweep3D = (props) => (
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
			d="m3 22 5.5-5.5M20 5l-2.5 2.5M7 21h8.5l-7-12-5.833 10M14.5 3l7 12M8.5 9l6-6M15.5 21l6-6"
		/>
	</svg>
);
export default SvgSweep3D;
